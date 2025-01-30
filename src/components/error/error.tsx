const Error = ({error}:any) => {
    return ( 
        <h1 className="text-xl text-center text-red-600 animate-pulse">{error.message}</h1>
     );
}
 
export default Error;