import {
    Card,
    Input,
    Button,
    CardBody,
    CardHeader,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
  
  // eslint-disable-next-line react/prop-types
  export function ContcatComponent({ onSubmit }) {
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = {
        email: event.target.email.value,
        title: event.target.title.value,
        description: event.target.description.value,
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
            Contact
          </Typography>
          <Typography className="!text-gray-600 text-[18px] font-normal">
            Contactez-nous dès maintenant et profitez d`un monitoring
            haut de gamme pour chacun de vos incidents.
          </Typography>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:mt-8">
            <div>
              <div className="py-3">
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    E-mail
                  </Typography>
                </label>
                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="Votre addresse mail"
                />
              </div>
              <div className="py-3">
                <label htmlFor="title">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Titre de votre demande
                  </Typography>
                </label>
                <Input
                  id="title"
                  color="gray"
                  size="lg"
                  type="text"
                  name="title"
                  placeholder="Le titre de votre demande"
                />
              </div>
              <div className="py-3">
                <label htmlFor="description">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Description de votre demande
                  </Typography>
                </label>
                <Textarea
                  id="description"
                  color="gray"
                  size="lg"
                  type="textarea"
                  name="description"
                  placeholder="Décrivez votre demande"
                />
              </div>
            </div>
            <Button size="lg" color="light-blue" fullWidth type="submit">
              Envoyer
            </Button>
          </form>
          <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            En nous contactant, vous acceptez nos{" "}
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
  
  export default ContcatComponent;
  