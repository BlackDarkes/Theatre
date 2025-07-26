interface IErrorProps {
  error: {
    message: string,
    name?: string,
    stack?: string,
  };
}
  
export const Error = ({ error }: IErrorProps) => {
  return (
    <div className=''>
      <div className="">⚠️</div>
      <h3>Произошла ошибка</h3>
      <p>{error.message}</p>
      <button 
        className=""
        onClick={() => window.location.reload()}
      >
        Попробовать снова
      </button>
    </div>
  );
}