const Priorities = [
    {
        name: 'Priorité Basse',
        code: 'LOW',
        levels: [
            {
                name: 'Tâches Non Urgentes',
                sublevels: [
                    { pname: 'Lecture de documentation', code: 'LOW-READ' },
                    { pname: 'Réunion informelle', code: 'LOW-MEET' }
                ]
            },
            {
                name: 'Travaux Optionnels',
                sublevels: [
                    { pname: 'Suggestions d’amélioration', code: 'LOW-SUG' }
                ]
            }
        ]
    },
    {
        name: 'Priorité Moyenne',
        code: 'MEDIUM',
        levels: [
            {
                name: 'Tâches Importantes',
                sublevels: [
                    { pname: 'Révision de code', code: 'MED-REV' },
                    { pname: 'Mise à jour système', code: 'MED-UPD' }
                ]
            },
            {
                name: 'Projets en cours',
                sublevels: [
                    { pname: 'Développement de fonctionnalités', code: 'MED-DEV' }
                ]
            }
        ]
    },
    {
        name: 'Priorité Élevée',
        code: 'HIGH',
        levels: [
            {
                name: 'Tâches Urgentes',
                sublevels: [
                    { pname: 'Réparation critique', code: 'HIGH-REP' },
                    { pname: 'Problème de sécurité', code: 'HIGH-SEC' }
                ]
            },
            {
                name: 'Gestion de crise',
                sublevels: [
                    { pname: 'Panne générale', code: 'HIGH-DOWN' }
                ]
            }
        ]
    }
];

export default Priorities;