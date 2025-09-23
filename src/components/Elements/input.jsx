const Input = (props) => {
    const {type, placeholder, name} = props ;
    return (
        <input type={type} className="w-full px-3 py-2 rounded bg-transparent border border-gray-400 focus:outline-none"
            placeholder={placeholder}
            name={name}/>

    )
}

export default Input;