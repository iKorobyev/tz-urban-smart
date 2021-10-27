import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchUser} from "../store/action-creators/user";
import {useHistory} from "react-router";
import {IUser} from "../types/user";

interface FormProps {
  user: IUser;
  loading: boolean;
  error: string | null
}

const Form: FC<FormProps> = ({user, loading, error}) => {
  const dispatch = useDispatch()
  const [firstInput, setFirstInput] = useState('')
  const [secondInput, setSecondInput] = useState('')
  const history = useHistory()

  const handleSubmit = () => {
    history.push('/profile')
  }

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  if (loading) {
    return <h1>Loading....</h1>
  }
  if (error) {
    return <h1>Error: ${error}</h1>
  }

  return (
    <div className="flex min-h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-20">
        <h2 className="text-[#191919]">Hello</h2>
        <input placeholder="Введите логин" className="border-1 border-[#191919]"
               onChange={e => setFirstInput(e.target.value)}
               type="text"/>
        <input placeholder="Введите пароль" className="border-1 border-[#191919]"
               onChange={e => setSecondInput(e.target.value)}
               type="password"/>
        <button className="disabled:bg-[#ff0000] bg-[#00FF00]" type="submit"
                disabled={(!(firstInput === user.login && secondInput === user.password))}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Form;