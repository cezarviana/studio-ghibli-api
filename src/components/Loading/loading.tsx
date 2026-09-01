import loadingGif from "../../assets/catbus-loading.gif";

type LoadingProps = {
  isLoading: boolean;
};

export const Loading = ({ isLoading }: LoadingProps) => {
  if (!isLoading) return null;

  return (
    <div className="flex flex-col items-center justify-center mb-20 text-white">
      <p className="flex text-3xl mb-20">Loading...</p>
      <img
        src={loadingGif}
        alt="loading movie"
        className="flex items-center justify-center rounded-lg w-90 mb-4"
      />
    </div>
  );
};
