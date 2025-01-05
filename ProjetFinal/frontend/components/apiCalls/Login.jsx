import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export function LoginComponent({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    onSubmit(formData);
  };

  return (
    <Card shadow={false} className="md:px-24 md:py-14 py-8 border border-gray-300 shadow-xl">
      <CardHeader shadow={false} floated={false} className="text-center">
        <Typography variant="h1" color="light-blue" className="mb-4 !text-3xl lg:text-4xl">
          Connexion
        </Typography>
        <Typography className="!text-gray-600 text-[18px] font-normal ">
        Accédez à votre compte dès maintenant et profitez d`un monitoring haut de gamme pour chacun de vos incidents.        </Typography>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:mt-8">
          <div>
            <div className="password py-3">
              <label htmlFor="email">
                <Typography variant="small" color="blue-gray" className="block font-medium mb-2">
                  Email
                </Typography>
              </label>
              <Input id="email" color="gray" size="lg" type="email" name="email" placeholder="VotreEmail@mail.com" />
            </div>
            <div className="password py-3">
              <label htmlFor="password">
                <Typography variant="small" color="blue-gray" className="block font-medium mb-2">
                  Votre mot de passe
                </Typography>
              </label>
              <Input id="password" color="gray" size="lg" type="password" name="password" placeholder="Votre mot de passe" />
            </div>
          </div>
          <Button size="lg" color="light-blue" fullWidth type="submit">
            Continuer
          </Button>
        </form>
        <Button
          variant="outlined"
          size="lg"
          className="flex h-12 border-blue-gray-200 items-center justify-center gap-2 mt-4"
          fullWidth
        >
          <img
            src={`https://www.material-tailwind.com/logos/logo-google.png`}
            alt="google"
            className="h-6 w-6"
          />{" "}
          connect in with google
        </Button>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            En vous connectant, vous acceptez nos{" "}
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

export default LoginComponent;