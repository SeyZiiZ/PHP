import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function TimelineComponent() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon color="light-blue"/>
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Signalement de l`incident
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              L`utilisateur signale un incident via le formulaire dédié,
              fournissant des informations telles que le type d`incident, son
              urgence, et une description détaillée.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon color="light-blue"/>
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Affectation à une équipe
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              Une fois l`incident validé, il est assigné à son équipe ou a lui meme
              en fonction de la nature du problème et de l`urgence.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon color="light-blue"/>
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Analyse et résolution
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              L`équipe examine les détails de l`incident, analyse les causes
              possibles, et met en œuvre une solution pour résoudre le problème
              efficacement.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon color="light-blue"/>
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Confirmation et clôture
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              Une fois l`incident résolu, l`utilisateur est informé. Si tout est
              conforme, l`incident est officiellement clôturé et archivé pour un
              suivi futur.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
