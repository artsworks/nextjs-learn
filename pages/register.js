import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [count, setCount] = useState(1);
  const [formState, setFormState] = useState();

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
  });

  const onSubmit = (data) => {
    setCount(count + 1);
    setFormState({ ...formState, ...data });
  };

  const onClickBack = () => {
    setCount(count - 1);
  };

  return (
    <section>
      <h1 className="title">Register</h1>
      <h2 className="title">Page-{count}</h2>

      {count === 1 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
          />
          {errors.name && <span className="error">Name is required</span>}

          <input
            type="text"
            placeholder="Suburb"
            {...register('suburb', { required: true })}
          />
          {errors.suburb && <span className="error">Suburb is required</span>}

          {count > 1 ? (
            <span className="action__back" onClick={onClickBack}>
              Go Back
            </span>
          ) : (
            ''
          )}

          <input type="submit" />
        </form>
      ) : null}

      {count === 2 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Title"
            {...register('title', { required: true })}
          />
          {errors.title && <span className="error">Title is required</span>}

          <input
            type="text"
            placeholder="Color"
            {...register('color', { required: true })}
          />
          {errors.color && <span className="error">Color is required</span>}

          {count > 1 ? (
            <span className="action__back" onClick={onClickBack}>
              Go Back
            </span>
          ) : (
            ''
          )}

          <input type="submit" />
        </form>
      ) : null}

      {count === 3 ? (
        <div className="result">
          <code>{JSON.stringify(formState)}</code>
          <span className="action__back" onClick={onClickBack}>
            Go Back
          </span>
        </div>
      ) : null}
    </section>
  );
}
