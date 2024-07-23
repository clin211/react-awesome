const hobby = ['Sports', 'Cooking', 'Traveling'];

const RegistrationFormUncontrolled = () => {
    // 处理表单提交
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', e);
        const nickname = e.target.nickname.value;
        const age = e.target.age.value;
        const sex = e.target.sex.value;
        const password = e.target.password.value;
        const hobby = e.target.hobby.value;
        const city = e.target.city.value;
        console.log('🚀 ~ handleSubmit ~ formData:', nickname, age, sex, password, hobby, city)
        // 在这里你可以添加提交表单的逻辑
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-6 w-full px-4">
                <label htmlFor="nickname" className="block mb-2">Nickname:</label>
                <input
                    type="text"
                    id="nickname"
                    name="nickname"
                    className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 ps-4 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
            </div>

            <div className="mb-6 w-full px-4">
                <label htmlFor="age" className="block mb-2">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 ps-4 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
            </div>

            <div className="mb-6 w-full px-4">
                <label htmlFor="password" className="block mb-2">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 ps-4 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
            </div>

            <div className="mb-6 w-full px-4">
                <label className="block mb-2">Sex:</label>
                <label className="inline-flex items-center mr-4">
                    <input
                        type="radio"
                        name="sex"
                        value="male"
                    />
                    <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name="sex"
                        value="female"
                    />
                    <span className="ml-2">Female</span>
                </label>
            </div>

            <div className="mb-6 w-full px-4">
                <fieldset>
                    <legend className="block mb-2">Hobby:</legend>
                    {hobby.map(item => (<label className="inline-flex items-center mr-4" key={item}>
                        <input
                            type="checkbox"
                            name='hobby'
                            value={item}
                        />
                        <span className="ml-2">{item}</span>
                    </label>))}

                </fieldset>
            </div>

            <div className="mb-6 w-full px-4">
                <label htmlFor="city" className="block mb-2">City:</label>
                <select
                    id="city"
                    name="city"
                    className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 ps-4 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                >
                    <option value="beijing">Beijing</option>
                    <option value="shanghai">Shanghai</option>
                    <option value="guangzhou">Guangzhou</option>
                    <option value="sichuan">Sichuan</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
            >
                Register
            </button>
        </form>
    );
};

export default RegistrationFormUncontrolled;