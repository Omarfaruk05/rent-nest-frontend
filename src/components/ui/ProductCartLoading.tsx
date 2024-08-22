import RevelMotion from "../motions/RevelMotion";

const ProductCartLoading = () => {
  return (
    <div className="border border-gray-200 shadow rounded-md p-4 my-2 max-w-sm w-full mx-auto">
      <div className="animate-pulse">
        <div className="rounded-md bg-gray-200 h-40 w-full"></div>
        <div className="flex-1 space-y-2 py-3">
          <div className="h-2 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-2 w-32 bg-gray-200 rounded"></div>
            <div className="h-2 w-20 bg-gray-200 rounded"></div>
            <div className="h-2 w-40 bg-gray-200 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-200 rounded "></div>
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="h-2 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <div className="h-8 w-full bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCartLoading;
