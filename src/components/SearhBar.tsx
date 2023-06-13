import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const Form = z.object({
  name: z.string(),
  gender: z.string(),
  status: z.string(),
});

type FormType = z.infer<typeof Form>;

function SearhBar({ setPage }: { setPage: (n: number) => void }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(Form),
    defaultValues: {
      name: searchParams.get("name") || "",
      gender: searchParams.get("gender") || "",
      status: searchParams.get("status") || "",
    },
  });

  const onSubmit = (data: FormType) => {
    let queryParams = "?";

    for (let [key, value] of Object.entries(data)) {
      if (value) {
        queryParams += `${key}=${value}&`;
      }
    }

    setSearchParams(queryParams);
    setPage(1);
  };
  return (
    <div className="mb-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap items-end gap-5"
      >
        <div>
          <label htmlFor="name" className="mb-2 block">
            Character Name
          </label>
          <input
            {...register("name")}
            className="rounded-lg border px-2 py-2 outline-none"
          />
        </div>

        <div className="w-[280px]">
          <label htmlFor="status" className="mb-2 block">
            Status
          </label>
          <select
            className=" w-full rounded-lg border bg-transparent px-2 py-2 outline-none"
            {...register("status")}
            id="status"
          >
            <option value="">Select --- </option>
            <option value="alive">A Live</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className="w-[280px]">
          <label className="mb-2 block" htmlFor="gender">
            Gender
          </label>
          <select
            className="w-full rounded-lg border bg-transparent px-2 py-2 outline-none"
            {...register("gender")}
            id="gender"
          >
            <option value="">Select --- </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
          </select>
        </div>

        <button className="rounded-lg border border-zinc-300 px-3 py-1">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearhBar;
