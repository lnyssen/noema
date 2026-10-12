export const NOM = 'noēma';
export const accents = [
  ['Violet', '#7f00ff'], ['Indigo', '#585de4'], ['Bleu', '#0a70e6'], ['Turquoise', '#03817d'],
  ['Vert', '#1f8449'], ['Rose', '#db1f70'], ['Corail', '#cf4217'], ['Ardoise', '#5b75a2'],
] as const;

export const benefices = [
  ['Un agenda qui connaît vos lieux et vos trajets', 'Glisser-déposer, plusieurs lieux, et une alerte quand le temps de trajet entre deux séances est trop court.'],
  ['Des patients qui prennent et déplacent leurs rendez-vous seuls', 'Créneaux calculés d’après vos horaires, vos congés et votre agenda. Vous confirmez, ou non.'],
  ['Des reçus, attestations et relances en un clic', 'PDF, envoi par e-mail ou WhatsApp, relance d’impayé avec code QR de virement.'],
  ['Le suivi de la convention INAMI sans calcul', 'Plafonds de séances sur douze mois et suivi trimestriel exportable.'],
  ['Des notes de séance chiffrées', 'Notes et documents chiffrés avant d’être enregistrés.'],
  ['Une application qui s’installe sur le téléphone', 'Face ID ou empreinte, verrouillage automatique après 30 minutes d’inactivité.'],
];

export const journee = [
  ['Le matin', 'L’agenda de la semaine s’ouvre sur vos lieux, chacun dans sa couleur.'],
  ['Entre deux séances', 'Marquer une séance honorée, ou l’annuler si l’on s’est trompé. Deux gestes.'],
  ['Le soir', 'Les reçus partent, la relance qu’on n’ose pas envoyer est prête, avec son code QR.'],
];

export const nav = [
  ['Fonctionnalités', 'fonctionnalites/'], ['Belgique et INAMI', 'belgique-inami/'], ['Sécurité', 'securite/'],
  ['Démonstration', 'demonstration/'], ['Tarifs', 'tarifs/'], ['Questions', 'questions/'],
];

export const faq = [
  ['Où sont mes données ?', null],
  ['Est-ce conforme au RGPD ?', 'Nous n’affirmons pas une conformité que nous ne pouvons pas encore prouver. Nous décrivons ce qui existe : chiffrement des notes et documents, droit d’accès, export, anonymisation et suppression d’un dossier.'],
  ['Mes patients doivent-ils créer un compte ?', 'Non. Ils prennent rendez-vous par un lien, sans compte.'],
  ['Y a-t-il du néerlandais ?', 'Pas encore.'],
  ['Et si la convention INAMI change ?', 'Les plafonds sont des paramètres. Vous restez responsable de leur application.'],
];
