import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./Login.module.css";
import { Container } from "../../components/Container/Container";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggingIn, loginError } = useAuth();
  const history = useHistory();
  const location = useLocation<{ from: { pathname: string } }>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = await login(email, password);
    if (result.success) {
      const redirectTo = location.state?.from?.pathname || "/";
      history.replace(redirectTo);
    }
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>Login</h1>
          {loginError && (
            <div className={styles.error}>{loginError.message}</div>
          )}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoggingIn}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoggingIn}
                required
              />
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
