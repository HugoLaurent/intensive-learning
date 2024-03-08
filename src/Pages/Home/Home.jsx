import React, { useState } from "react";
import "./home.css";
import logo from "../../public/logo/logo.png";
import ButtonForm from "../../Components/ButtonForm/ButtonForm";
import InputForm from "../../Components/InputForm/InputForm";

function Home() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [placeholderEmail, setPlaceholderEmail] = useState("Email");
  const [placeholderPassword, setPlaceholderPassword] = useState("Password");

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="main-container flex">
      <section className={`glassmorphism flex justify-around`}>
        <article
          className={`container ${
            !showLoginForm ? "container-animate-out" : ""
          }`}
        >
          <div className="background-gradient">
            <div className="login-card">
              <div className="brand-logo">
                <img src={logo} alt="Intense Learning Logo" />
                <div className="brand-name">
                  <span className="intense">INTENSE</span>
                  <span className="learning">LEARNING</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article
          className={`flex flex-col justify-between ${
            showLoginForm ? "form-right" : "form-left"
          }`}
        >
          <div className="text-center uppercase">
            <h1 className="mb-3 text-3xl font-bold">
              {showLoginForm ? "Bienvenue" : "Inscription"}
            </h1>
            <h2>
              {showLoginForm
                ? "Entrez vos informations"
                : "Demandez vos informations"}
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <InputForm
              type="email"
              placeholder={placeholderEmail}
              value={email}
              setValue={setEmail}
            />
            {!showLoginForm && (
              <InputForm
                type="password"
                placeholder="Mot de passe"
                value={password}
                setValue={setPassword}
              />
            )}
            <div>
              <ButtonForm text={showLoginForm ? "Suivant" : "S'inscrire"} />
              <button
                onClick={handleToggleForm}
                className="mt-2 w-full text-right text-sm capitalize hover:underline"
              >
                {showLoginForm ? "Demandez vos identifiants" : "Retour"}
              </button>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
}

export default Home;
