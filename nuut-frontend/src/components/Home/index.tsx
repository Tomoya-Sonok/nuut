import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputSchema } from "@/lib/schema/Home/schema";

type Inputs = {
  example: string;
};

type InputType = z.infer<typeof InputSchema>;

export const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(InputSchema),
  });

  const onSubmit: SubmitHandler<InputType> = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="m-8">
      <h1 className="text-4xl font-medium text-center">
        nuut 〜食品成分検索アプリ〜
      </h1>
      <div className="flex justify-center mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                defaultValue=""
                {...register("example")}
              />
              <button type="submit" className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {errors.example && (
            <div className="text-error mt-2">{errors.example.message}</div>
          )}
        </form>
      </div>
    </div>
  );
};
