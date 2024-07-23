import { useState } from 'react';

const hobby = ['Sports', 'Cooking', 'Traveling'];

const RegistrationForm = () => {
    // 使用useState钩子来管理表单数据
    const [form, setForm] = useState({
        nickname: '',
        age: '',
        password: '',
        sex: 'male', // 默认为male
        hobby: [],
        city: 'beijing',
    });

    // 处理表单输入
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        const newFormData = { ...form };
        const hobby = [...newFormData.hobby];
        const isCheckbox = type === 'checkbox';

        if (isCheckbox && !checked && hobby.includes(value)) {
            // 如果是未选中的复选框，且当前爱好数组中包含该选项，则从爱好数组中移除
            hobby.splice(hobby.indexOf(value), 1);
        } else if (isCheckbox && checked) {
            // 如果是选中的复选框，则添加到爱好数组中
            hobby.push(value);
        }

        newFormData[name] = isCheckbox ? hobby : value;

        setForm(newFormData);
    };

    // 处理表单提交
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
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
                    value={form.nickname}
                    onChange={handleInputChange}
                    className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 ps-4 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
            </div>

            <div className="mb-6 w-full px-4">
                <label htmlFor="age" className="block mb-2">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={form.age}
                    onChange={handleInputChange}
                    className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 ps-4 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
            </div>

            <div className="mb-6 w-full px-4">
                <label htmlFor="password" className="block mb-2">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
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
                        checked={form.sex === 'male'}
                        onChange={handleInputChange}
                    />
                    <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name="sex"
                        value="female"
                        checked={form.sex === 'female'}
                        onChange={handleInputChange}
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
                            checked={form.hobby.includes(item)}
                            onChange={handleInputChange}
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
                    value={form.city}
                    onChange={handleInputChange}
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

export default RegistrationForm;