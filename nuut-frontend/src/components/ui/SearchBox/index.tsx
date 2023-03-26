import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputSchema, InputType } from "@/lib/schema/ui/SearchBox/schema";

export const SearchBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(InputSchema),
  });

  const onSubmit: SubmitHandler<InputType> = (data) => {
    // console.log(data);
  };

  return (
    <div className="mx-auto pt-8 sm:w-1/2 lg:w-1/3">
      <form className="h-24" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="食品名を入力してください"
              className="input input-bordered w-full"
              defaultValue=""
              {...register("foodName")}
            />
            <button
              type="submit"
              name="searchButton"
              className="btn btn-square bg-primary border-transparent hover:bg-primary hover:border-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
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
        {errors.foodName && (
          <div className="alert alert-error shadow-lg mt-2 p-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{errors.foodName.message}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
