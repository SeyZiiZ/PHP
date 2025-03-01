import { NavLink } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export function RegisterComponent({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.passwordChecker.value,
    };
    onSubmit(formData);
  };

  return (
    <Card
      shadow={false}
      className="md:px-24 md:py-14 py-8 border border-gray-300 shadow-xl"
    >
      <CardHeader shadow={false} floated={false} className="text-center">
        <Typography
          variant="h1"
          color="light-blue"
          className="mb-4 !text-3xl lg:text-4xl"
        >
          Inscription
        </Typography>
        <Typography className="!text-gray-600 text-[18px] font-normal ">
          Inscrivez-vous dès maintenant et profitez d`un monitoring haut de
          gamme pour chacun de vos incidents.
        </Typography>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:mt-8">
          <div>
            <div className="password py-3">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Votre Email
                </Typography>
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="VotreEmail@mail.com"
              />
            </div>
            <div className="password py-3">
              <label htmlFor="password">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Votre mot de passe
                </Typography>
              </label>
              <p>
                <small>
                  Minimum 8 caractères, au moins une majuscule et un caractère
                  spécial.
                </small>
              </p>
              <Input
                id="password"
                color="gray"
                size="lg"
                type="password"
                name="password"
                placeholder="Votre mot de passe"
              />
            </div>
            <div className="passwordChecker py-3">
              <label htmlFor="passwordChecker">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Confirmez votre mot de passe
                </Typography>
              </label>
              <Input
                id="passwordChecker"
                color="gray"
                size="lg"
                type="password"
                name="passwordChecker"
                placeholder="Votre mot de passe"
              />
            </div>
          </div>
          <Button size="lg" color="light-blue" fullWidth type="submit">
            Continuer
          </Button>
        </form>
        <div className="mt-6 text-center">
          <Typography variant="small" color="blue-gray">
            Vous avez déjà un compte ?{" "}
            <NavLink
              to="/login"
              className="text-light-blue-500 hover:underline"
            >
              Connectez-vous
            </NavLink>
          </Typography>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            En vous inscrivant, vous acceptez nos{" "}
            <a href="" className="text-blue-500 underline">
              conditions d`utilisation
            </a>{" "}
            et notre{" "}
            <a
              href=""
              className="text-blue-500 underline"
            >
              politique de confidentialité
            </a>
            .
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default RegisterComponent;