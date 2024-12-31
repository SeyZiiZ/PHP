import { Accordion, AccordionTab } from 'primereact/accordion';

export default function AccordionComponent() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Qui Sommes Nous ?">
                    <p className="m-0">
                    Nous sommes une équipe dédiée à simplifier la gestion des incidents en ligne. 
                    Notre plateforme intuitive permet aux entreprises et organisations de signaler, 
                    suivre et résoudre rapidement leurs incidents, 
                    tout en favorisant la collaboration entre les équipes. 
                    Grâce à des outils modernes et efficaces, nous contribuons à améliorer la réactivité et la transparence dans la résolution des problèmes. 
                    Notre mission : vous aider à garder le contrôle, même en situation de crise.
                    </p>
                </AccordionTab>
                <AccordionTab header="Que Proposons Nous ?">
                    <p className="m-0">
                    Nous proposons une solution complète pour la gestion des incidents en ligne. Notre plateforme offre :
                    <ul>
                        <li><strong>Signalement simplifié</strong> : enregistrement rapide des incidents.</li>
                        <li><strong>Suivi en temps réel</strong> : une vue claire de l`évolution des problèmes.</li>
                        <li><strong>Collaboration efficace</strong> : des outils pour connecter vos équipes.</li>
                        <li><strong>Analyse et reporting</strong> : des statistiques pour améliorer vos processus.</li>
                    </ul>
                    </p>
                </AccordionTab>
                <AccordionTab header="Pourquoi Nous ?">
                    <p className="m-0">
                        <ul>
                            <li><strong>Expertise</strong> : une solution conçue par des spécialistes de la gestion d`incidents.</li>
                            <li><strong>Simplicité</strong> : une interface intuitive adaptée à tous les utilisateurs.</li>
                            <li><strong>Fiabilité</strong> : des outils performants pour une gestion sans faille.</li>
                            <li><strong>Accompagnement</strong> : un support dédié pour répondre à vos besoins.</li>
                        </ul>
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}