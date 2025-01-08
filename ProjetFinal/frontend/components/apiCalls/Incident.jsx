import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { CascadeSelect } from "primereact/cascadeselect";
import Priorities from "../../composables/prioritiesList";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function IncidentComponent({ onSubmit }) {
  const [selectedPriority, setSelectedPriority] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      title: event.target.title.value,
      description: event.target.description.value,
      priority: selectedPriority.pname,
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
          Incident
        </Typography>
        <Typography className="!text-gray-600 text-[18px] font-normal">
          Déclarez votre incident dès maintenant et profitez d`un monitoring
          haut de gamme pour chacun de vos incidents.
        </Typography>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:mt-8">
          <div>
            <div className="py-3">
              <label htmlFor="title">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Titre
                </Typography>
              </label>
              <Input
                id="title"
                color="gray"
                size="lg"
                type="text"
                name="title"
                placeholder="Le nom de votre incident"
              />
            </div>
            <div className="py-3">
              <label htmlFor="description">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Description de votre incident
                </Typography>
              </label>
              <Textarea
                id="description"
                color="gray"
                size="lg"
                type="textarea"
                name="description"
                placeholder="Décrivez votre incident"
              />
            </div>
          </div>
          <div className="card flex justify-content-center">
            <CascadeSelect
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.value)}
              options={Priorities}
              optionLabel="name"
              optionGroupLabel="name"
              optionGroupChildren={[]}
              className="w-full md:w-14rem border-slate-600"
              breakpoint="767px"
              placeholder="Sélectionnez une priorité"
              style={{ minWidth: "14rem" }}
            />
          </div>
          <Button size="lg" color="light-blue" fullWidth type="submit">
            Continuer
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}

export default IncidentComponent;
