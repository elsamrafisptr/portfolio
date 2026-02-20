const NoData = ({ message = 'No Data Found' }: { message?: string }) => {
  return (
    <div className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed border-black/5 bg-gray-50 p-6 text-center">
      <p className="font-sans text-sm font-medium text-black/40">{message}</p>
    </div>
  )
}

export default NoData
