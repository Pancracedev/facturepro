// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/src/components/ui/buttonn"
// import { CheckCircle } from "lucide-react"

// export default function LandingPage() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       {/* Header */}
//       <header className="border-b border-gray-200 bg-white">
//         <div className="container mx-auto flex h-16 items-center justify-between px-4">
//           <div className="flex items-center">
//             <Image src="/logo.png" alt="FacturePro Logo" width={40} height={40} className="mr-2" />
//             <span className="text-xl font-bold text-blue-600">FacturePro</span>
//           </div>
//           <nav className="hidden space-x-8 md:flex">
//             <Link href="#fonctionnalites" className="text-gray-600 hover:text-blue-600">
//               Fonctionnalités
//             </Link>
//             <Link href="#avantages" className="text-gray-600 hover:text-blue-600">
//               Avantages
//             </Link>
//             <Link href="#tarifs" className="text-gray-600 hover:text-blue-600">
//               Tarifs
//             </Link>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <Link href="/auth/signin">
//               <Button variant="outline">Connexion</Button>
//             </Link>
//             <Link href="/auth/signup">
//               <Button>Essai gratuit</Button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main>
//         {/* Hero Section */}
//         <section className="bg-gradient-to-b from-white to-gray-50 py-20">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
//               <div className="max-w-xl">
//                 <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
//                   Gérez vos factures en toute simplicité
//                 </h1>
//                 <p className="mb-8 text-xl text-gray-600">
//                   FacturePro vous permet de créer, envoyer et suivre vos factures professionnelles en quelques clics.
//                   Gagnez du temps et concentrez-vous sur votre activité.
//                 </p>
//                 <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
//                   <Link href="/auth/signup">
//                     <Button size="lg" className="w-full sm:w-auto">
//                       Commencer gratuitement
//                     </Button>
//                   </Link>
//                   <Link href="#demo">
//                     <Button size="lg" variant="outline" className="w-full sm:w-auto">
//                       Voir la démo
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="relative h-[400px] w-full max-w-md">
//                 <Image
//                   src="/dashboard-preview.png"
//                   alt="Aperçu du tableau de bord"
//                   fill
//                   className="rounded-lg object-contain shadow-xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Fonctionnalités */}
//         <section id="fonctionnalites" className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="mb-16 text-center">
//               <h2 className="mb-4 text-3xl font-bold text-gray-900">Fonctionnalités principales</h2>
//               <p className="mx-auto max-w-2xl text-lg text-gray-600">
//                 Découvrez comment FacturePro peut transformer votre gestion de facturation et vous faire gagner du temps
//                 précieux.
//               </p>
//             </div>

//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {/* Fonctionnalité 1 */}
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
//                 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//                     <polyline points="14 2 14 8 20 8" />
//                     <line x1="16" y1="13" x2="8" y2="13" />
//                     <line x1="16" y1="17" x2="8" y2="17" />
//                     <polyline points="10 9 9 9 8 9" />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold text-gray-900">Création de factures</h3>
//                 <p className="text-gray-600">
//                   Créez des factures professionnelles en quelques secondes avec nos modèles personnalisables.
//                 </p>
//               </div>

//               {/* Fonctionnalité 2 */}
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
//                 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
//                     <line x1="8" y1="21" x2="16" y2="21" />
//                     <line x1="12" y1="17" x2="12" y2="21" />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold text-gray-900">Suivi des paiements</h3>
//                 <p className="text-gray-600">
//                   Suivez facilement le statut de vos factures et recevez des notifications lorsqu'elles sont payées.
//                 </p>
//               </div>

//               {/* Fonctionnalité 3 */}
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
//                 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
//                     <path d="M22 12A10 10 0 0 0 12 2v10z" />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold text-gray-900">Rapports détaillés</h3>
//                 <p className="text-gray-600">
//                   Obtenez des insights précieux sur votre activité grâce à nos rapports et tableaux de bord.
//                 </p>
//               </div>

//               {/* Fonctionnalité 4 */}
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
//                 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                     <circle cx="9" cy="7" r="4" />
//                     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold text-gray-900">Gestion des clients</h3>
//                 <p className="text-gray-600">
//                   Gérez votre base de clients et accédez rapidement à leur historique de facturation.
//                 </p>
//               </div>

//               {/* Fonctionnalité 5 */}
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
//                 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold text-gray-900">Gestion des paiements</h3>
//                 <p className="text-gray-600">
//                   Acceptez les paiements en ligne et automatisez les rappels pour les factures impayées.
//                 </p>
//               </div>

//               {/* Fonctionnalité 6 */}
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
//                 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//                     <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//                   </svg>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold text-gray-900">Rappels automatiques</h3>
//                 <p className="text-gray-600">
//                   Configurez des rappels automatiques pour les factures en retard et les échéances à venir.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Avantages */}
//         <section id="avantages" className="bg-gray-50 py-20">
//           <div className="container mx-auto px-4">
//             <div className="mb-16 text-center">
//               <h2 className="mb-4 text-3xl font-bold text-gray-900">Pourquoi choisir FacturePro ?</h2>
//               <p className="mx-auto max-w-2xl text-lg text-gray-600">
//                 Notre solution de facturation offre de nombreux avantages pour les entrepreneurs et les PME.
//               </p>
//             </div>

//             <div className="grid gap-8 md:grid-cols-2">
//               <div className="flex flex-col justify-center">
//                 <ul className="space-y-6">
//                   {[
//                     "Gain de temps considérable dans la gestion de vos factures",
//                     "Interface intuitive et facile à prendre en main",
//                     "Sécurité des données garantie avec un chiffrement de bout en bout",
//                     "Accès depuis n'importe quel appareil, n'importe où",
//                     "Support client réactif et disponible",
//                     "Mises à jour régulières avec de nouvelles fonctionnalités",
//                   ].map((avantage, index) => (
//                     <li key={index} className="flex items-start">
//                       <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
//                       <span className="text-gray-700">{avantage}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="relative h-[400px] rounded-lg shadow-xl">
//                 <Image src="/invoice-preview.png" alt="Aperçu d'une facture" fill className="rounded-lg object-cover" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Témoignages */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="mb-16 text-center">
//               <h2 className="mb-4 text-3xl font-bold text-gray-900">Ce que nos clients disent</h2>
//               <p className="mx-auto max-w-2xl text-lg text-gray-600">
//                 Découvrez comment FacturePro a transformé la gestion de facturation de nos clients.
//               </p>
//             </div>

//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {/* Témoignage 1 */}
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
//                 <div className="mb-4 flex items-center">
//                   <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
//                     <Image src="/testimonial-1.jpg" alt="Sophie Martin" width={48} height={48} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Sophie Martin</h4>
//                     <p className="text-sm text-gray-600">Graphiste indépendante</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">
//                   "FacturePro a complètement transformé ma façon de gérer mes factures. Je gagne un temps précieux et
//                   mes clients sont impressionnés par le professionnalisme de mes factures."
//                 </p>
//               </div>

//               {/* Témoignage 2 */}
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
//                 <div className="mb-4 flex items-center">
//                   <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
//                     <Image src="/testimonial-2.jpg" alt="Thomas Dubois" width={48} height={48} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Thomas Dubois</h4>
//                     <p className="text-sm text-gray-600">Consultant IT</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">
//                   "Les rapports détaillés me permettent de suivre précisément mes revenus et de prévoir ma trésorerie.
//                   Un outil indispensable pour mon activité !"
//                 </p>
//               </div>

//               {/* Témoignage 3 */}
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
//                 <div className="mb-4 flex items-center">
//                   <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
//                     <Image src="/testimonial-3.jpg" alt="Marie Leroy" width={48} height={48} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Marie Leroy</h4>
//                     <p className="text-sm text-gray-600">Agence de communication</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">
//                   "Notre équipe utilise FacturePro quotidiennement. La gestion des clients et le suivi des paiements
//                   sont devenus un jeu d'enfant. Je le recommande vivement !"
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Tarifs */}
//         <section id="tarifs" className="bg-gray-50 py-20">
//           <div className="container mx-auto px-4">
//             <div className="mb-16 text-center">
//               <h2 className="mb-4 text-3xl font-bold text-gray-900">Tarifs simples et transparents</h2>
//               <p className="mx-auto max-w-2xl text-lg text-gray-600">
//                 Choisissez le forfait qui correspond le mieux à vos besoins.
//               </p>
//             </div>

//             <div className="grid gap-8 md:grid-cols-3">
//               {/* Forfait Starter */}
//               <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
//                 <h3 className="mb-2 text-xl font-bold text-gray-900">Starter</h3>
//                 <p className="mb-6 text-gray-600">Parfait pour les freelances débutants</p>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-gray-900">19€</span>
//                   <span className="text-gray-600">/mois</span>
//                 </div>
//                 <ul className="mb-8 space-y-4">
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Jusqu'à 20 factures par mois</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Gestion des clients</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Exportation PDF</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Support par email</span>
//                   </li>
//                 </ul>
//                 <Link href="/auth/signup?plan=starter">
//                   <Button className="w-full">Commencer</Button>
//                 </Link>
//               </div>

//               {/* Forfait Pro */}
//               <div className="relative rounded-lg border-2 border-blue-600 bg-white p-8 shadow-md">
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
//                   Populaire
//                 </div>
//                 <h3 className="mb-2 text-xl font-bold text-gray-900">Pro</h3>
//                 <p className="mb-6 text-gray-600">Idéal pour les freelances et petites entreprises</p>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-gray-900">39€</span>
//                   <span className="text-gray-600">/mois</span>
//                 </div>
//                 <ul className="mb-8 space-y-4">
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Factures illimitées</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Gestion des clients avancée</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Rappels automatiques</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Rapports détaillés</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Support prioritaire</span>
//                   </li>
//                 </ul>
//                 <Link href="/auth/signup?plan=pro">
//                   <Button className="w-full">Commencer</Button>
//                 </Link>
//               </div>

//               {/* Forfait Business */}
//               <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
//                 <h3 className="mb-2 text-xl font-bold text-gray-900">Business</h3>
//                 <p className="mb-6 text-gray-600">Pour les entreprises en croissance</p>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-gray-900">79€</span>
//                   <span className="text-gray-600">/mois</span>
//                 </div>
//                 <ul className="mb-8 space-y-4">
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Tout ce qui est inclus dans Pro</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Utilisateurs multiples</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Personnalisation avancée</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">API pour intégrations</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//                     <span className="text-gray-700">Support dédié</span>
//                   </li>
//                 </ul>
//                 <Link href="/auth/signup?plan=business">
//                   <Button className="w-full">Commencer</Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-blue-600 py-20 text-white">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="mb-6 text-3xl font-bold">Prêt à simplifier votre facturation ?</h2>
//             <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
//               Rejoignez des milliers d'entrepreneurs qui font confiance à FacturePro pour leur facturation.
//             </p>
//             <Link href="/auth/signup">
//               <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
//                 Commencer gratuitement
//               </Button>
//             </Link>
//             <p className="mt-4 text-sm text-blue-200">Aucune carte de crédit requise. Essai gratuit de 14 jours.</p>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-gray-200 bg-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-8 md:grid-cols-4">
//             <div>
//               <div className="flex items-center">
//                 <Image src="/logo.png" alt="FacturePro Logo" width={32} height={32} className="mr-2" />
//                 <span className="text-lg font-bold text-blue-600">FacturePro</span>
//               </div>
//               <p className="mt-4 text-gray-600">
//                 La solution de facturation simple et efficace pour les entrepreneurs et les PME.
//               </p>
//             </div>
//             <div>
//               <h4 className="mb-4 text-sm font-semibold uppercase text-gray-900">Produit</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#fonctionnalites" className="text-gray-600 hover:text-blue-600">
//                     Fonctionnalités
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#tarifs" className="text-gray-600 hover:text-blue-600">
//                     Tarifs
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-600 hover:text-blue-600">
//                     FAQ
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="mb-4 text-sm font-semibold uppercase text-gray-900">Ressources</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="text-gray-600 hover:text-blue-600">
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-600 hover:text-blue-600">
//                     Guides
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-600 hover:text-blue-600">
//                     Support
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="mb-4 text-sm font-semibold uppercase text-gray-900">Légal</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="text-gray-600 hover:text-blue-600">
//                     Conditions d'utilisation
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-600 hover:text-blue-600">
//                     Politique de confidentialité
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-600 hover:text-blue-600">
//                     Mentions légales
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 border-t border-gray-200 pt-8 text-center">
//             <p className="text-gray-600">© 2023 FacturePro. Tous droits réservés.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.visible
'use client'// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import {
  Layout,
  Menu,
  Input,
  Button,
  Dropdown,
  Avatar,
  Badge,
  Table,
  Tabs,
  Form,
  Select,
  DatePicker,
  Tooltip,
  Modal,
  Progress,
  Card,
  Divider,
  Tag,
  List,
  Space,
} from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  DownloadOutlined,
  UploadOutlined,
  PlusOutlined,
  FilterOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SaveOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  TeamOutlined,
  DashboardOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  CloudUploadOutlined,
  DownOutlined,
  MenuOutlined, // Icône du menu hamburger
} from "@ant-design/icons";
import * as echarts from "echarts";

const { Header, Sider, Content, Footer } = Layout;
const { TabPane } = Tabs;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPdf, setCurrentPdf] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // État pour gérer l'affichage du menu

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  // 👉 Auto-hide/show sidebar based on screen size
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const invoices = [
    { id: 1, number: "FAC-2025-001", client: "Entreprise ABC", date: "2025-04-25", amount: "1250.00 €", status: "Payée" },
    { id: 2, number: "FAC-2025-002", client: "Société XYZ", date: "2025-04-28", amount: "876.50 €", status: "En attente" },
    { id: 3, number: "FAC-2025-003", client: "Boutique 123", date: "2025-04-30", amount: "2340.75 €", status: "En retard" },
    { id: 4, number: "FAC-2025-004", client: "Restaurant Le Gourmet", date: "2025-05-01", amount: "560.25 €", status: "Payée" },
    { id: 5, number: "FAC-2025-005", client: "Cabinet Juridique", date: "2025-05-02", amount: "1800.00 €", status: "En attente" },
  ];

  const dashboardData = {
    totalInvoices: 152,
    paidInvoices: 98,
    pendingInvoices: 42,
    overdueInvoices: 12,
    monthlyRevenue: "45 680.50 €",
  };

  const columns = [
    {
      title: "N° Facture",
      dataIndex: "number",
      key: "number",
      render: (text: string) => <a href="#" onClick={() => handlePdfClick(text)}>{text}</a>,
    },
    { title: "Client", dataIndex: "client", key: "client" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Montant", dataIndex: "amount", key: "amount" },
    {
      title: "Statut",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = status === "Payée" ? "green" : status === "En attente" ? "gold" : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space size="small">
          <Button type="text" icon={<EyeOutlined />} className="cursor-pointer" />
          <Button type="text" icon={<EditOutlined />} className="cursor-pointer" />
          <Button type="text" icon={<DeleteOutlined />} className="cursor-pointer" />
        </Space>
      ),
    },
  ];

  const handlePdfClick = (pdfId: string) => {
    setCurrentPdf(pdfId);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 10, 50));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };



  React.useEffect(() => {

    const chartDom = document.getElementById("revenue-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        title: { text: "Revenus Mensuels 2025" },
        tooltip: { trigger: "axis" },
        legend: { data: ["Facturé", "Payé"] },
        grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
        xAxis: { type: "category", boundaryGap: false, data: ["Jan", "Fév", "Mar", "Avr", "Mai"] },
        yAxis: { type: "value" },
        series: [
          { name: "Facturé", type: "line", data: [35000, 42000, 38000, 48000, 52000] },
          { name: "Payé", type: "line", data: [32000, 40000, 35000, 43000, 45000] },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize());
      return () => {
        window.removeEventListener("resize", () => myChart.resize());
        myChart.dispose();
      };
    }
  }, [isMenuVisible]);

  return (
    <Layout className="min-h-screen">
      {/* Header */}
      <Header className="flex items-center justify-between bg-white shadow-md px-4 md:px-6 h-16 z-50 relative">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-blue-600 flex items-center">
            <i className="fas fa-file-invoice text-blue-600 mr-2"></i>
            <span>FacturePro</span>
          </div>
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Rechercher des factures..."
            className="w-40 md:w-96 rounded-lg border-gray-300"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <Tooltip title="Notifications">
            <Badge count={5} className="mr-4">
              <Button
                icon={<BellOutlined />}
                type="text"
                shape="circle"
                size="large"
                className="cursor-pointer"
              />
            </Badge>
          </Tooltip>
          <Dropdown
            menu={{
              items: [
                { key: "1", label: "Mon profil" },
                { key: "2", label: "Paramètres" },
                { type: "divider" },
                { key: "3", label: "Déconnexion" },
              ],
            }}
          >
            <Button className="flex items-center cursor-pointer" type="text">
              <Avatar size="small" icon={<UserOutlined />} className="mr-2" />
              <span>Jean Dupont</span>
              <DownOutlined className="ml-1 text-xs" />
            </Button>
          </Dropdown>
          {/* Menu hamburger uniquement sur mobile */}
          {isMenuVisible && <Button
            icon={<MenuOutlined />}
            className="ml-4 md:hidden"
            onClick={toggleMenu}
          />}
        </div>
      </Header>

      <Layout>
        {/* Sider responsive */}
        {!isMenuVisible && <Sider
          width={220}
          theme="light"
          className={`bg-white shadow-sm fixed z-40 top-16 left-0 h-full transition-transform duration-300 ease-in-out 
  ${isMenuVisible ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0`}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="h-full pt-4"
            items={[
              {
                key: "1",
                icon: <DashboardOutlined />,
                label: "Tableau de bord",
              },
              {
                key: "2",
                icon: <FileTextOutlined />,
                label: "Factures",
              },
              {
                key: "3",
                icon: <TeamOutlined />,
                label: "Clients",
              },
              {
                key: "4",
                icon: <SettingOutlined />,
                label: "Paramètres",
              },
              {
                key: "sub1",
                icon: <FileTextOutlined />,
                label: "Rapports",
                children: [
                  { key: "5", label: "Mensuel" },
                  { key: "6", label: "Trimestriel" },
                  { key: "7", label: "Annuel" },
                ],
              },
            ]}
          />
        </Sider>}
        <Content className="bg-gray-50 p-4 md:p-6">
          <Tabs defaultActiveKey="1" className="bg-white p-4 rounded-lg shadow-sm">
            <TabPane tab="Tableau de bord" key="1">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card className="shadow-sm">
                  <div className="text-gray-500 mb-2">Total Factures</div>
                  <div className="text-2xl font-bold">{dashboardData.totalInvoices}</div>
                  <Progress percent={100} showInfo={false} strokeColor="#1890ff" />
                </Card>
                <Card className="shadow-sm">
                  <div className="text-gray-500 mb-2">Factures Payées</div>
                  <div className="text-2xl font-bold text-green-500">{dashboardData.paidInvoices}</div>
                  <Progress
                    percent={Math.round((dashboardData.paidInvoices / dashboardData.totalInvoices) * 100)}
                    showInfo={false}
                    strokeColor="#52c41a"
                  />
                </Card>
                <Card className="shadow-sm">
                  <div className="text-gray-500 mb-2">Factures En Attente</div>
                  <div className="text-2xl font-bold text-yellow-500">{dashboardData.pendingInvoices}</div>
                  <Progress
                    percent={Math.round((dashboardData.pendingInvoices / dashboardData.totalInvoices) * 100)}
                    showInfo={false}
                    strokeColor="#faad14"
                  />
                </Card>
                <Card className="shadow-sm">
                  <div className="text-gray-500 mb-2">Factures En Retard</div>
                  <div className="text-2xl font-bold text-red-500">{dashboardData.overdueInvoices}</div>
                  <Progress
                    percent={Math.round((dashboardData.overdueInvoices / dashboardData.totalInvoices) * 100)}
                    showInfo={false}
                    strokeColor="#f5222d"
                  />
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card title="Revenus" className="shadow-sm">
                  <div id="revenue-chart" style={{ height: "300px" }}></div>
                </Card>
                <Card title="Activité Récente" className="shadow-sm">
                  <List
                    itemLayout="horizontal"
                    dataSource={invoices.slice(0, 4)}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar icon={<FileTextOutlined />} />}
                          title={<a href="#">{item.number}</a>}
                          description={`${item.client} - ${item.date}`}
                        />
                        <div>
                          <Tag color={item.status === "Payée" ? "green" : item.status === "En attente" ? "gold" : "red"}>
                            {item.status}
                          </Tag>
                        </div>
                      </List.Item>
                    )}
                  />
                  <div className="text-right mt-4">
                    <Button type="link" className="cursor-pointer">Voir tout</Button>
                  </div>
                </Card>
              </div>
            </TabPane>
            <TabPane tab="Factures" key="2">
              <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <Button type="primary" icon={<PlusOutlined />} className="mr-3" onClick={showModal}>
                    Nouvelle Facture
                  </Button>
                  <Button icon={<UploadOutlined />} className="mr-3">Importer</Button>
                  <Button icon={<DownloadOutlined />}>Exporter</Button>
                </div>
                <div className="flex items-center">

                  <Dropdown
                    menu={{
                      items: [
                        { key: "1", label: "Toutes" },
                        { key: "2", label: "Payées" },
                        { key: "3", label: "En attente" },
                        { key: "4", label: "En retard" },
                      ],
                      onClick: ({ key }) => {
                        console.log("Filtre sélectionné :", key);
                      },
                    }}
                  >
                    <Button icon={<FilterOutlined />} className="mr-3">
                      Filtrer <DownOutlined />
                    </Button>
                  </Dropdown>
                  <DatePicker placeholder="Sélectionner une date" className="w-44" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="col-span-2 bg-white rounded-lg shadow-sm overflow-auto" style={{ maxHeight: "600px" }}>
                  <Table
                    dataSource={invoices}
                    columns={columns.filter((col) => col.key !== "actions")}
                    pagination={false}
                    rowKey="id"
                    onRow={(record) => ({
                      onClick: () => handlePdfClick(record.number),
                      className: "cursor-pointer hover:bg-gray-50",
                    })}
                  />
                </div>
                <div className="col-span-3 bg-white rounded-lg shadow-sm p-4">
                  {currentPdf ? (
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-lg font-medium">Facture: {currentPdf}</div>
                        <div className="flex items-center">
                          <Button icon={<ZoomOutOutlined />} onClick={handleZoomOut} className="mr-2" />
                          <span className="mx-2">{zoomLevel}%</span>
                          <Button icon={<ZoomInOutlined />} onClick={handleZoomIn} className="mr-4" />
                          <Button icon={<RotateLeftOutlined />} className="mr-2" />
                          <Button icon={<RotateRightOutlined />} />
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg h-96 flex items-center justify-center overflow-auto">
                        <div style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "center top" }}>
                          <img
                            src={`https://readdy.ai/api/search-image?query=Professional%20invoice%20document%20with%20company%20logo%2C%20itemized%20list%20of%20services%2C%20total%20amount%2C%20payment%20details%2C%20and%20signature%20section.%20The%20invoice%20has%20a%20clean%20modern%20design%20with%20blue%20accents%20and%20a%20white%20background.%20High%20quality%20business%20document&width=600&height=800&seq=1&orientation=portrait`}
                            alt="Aperçu de facture"
                            className="max-w-full"
                          />
                        </div>
                      </div>

                      <Divider />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Informations Extraites</h3>
                          <Form layout="vertical">
                            <div className="grid grid-cols-2 gap-4">
                              <Form.Item label="N° Facture">
                                <Input value={currentPdf} disabled />
                              </Form.Item>
                              <Form.Item label="Date">
                                <Input value="2025-05-02" />
                              </Form.Item>
                              <Form.Item label="Client">
                                <Input value="Société XYZ" />
                              </Form.Item>
                              <Form.Item label="Montant Total">
                                <Input value="876.50 €" />
                              </Form.Item>
                              <Form.Item label="TVA">
                                <Input value="146.08 €" />
                              </Form.Item>
                              <Form.Item label="Échéance">
                                <Input value="2025-06-01" />
                              </Form.Item>
                            </div>
                          </Form>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-4">Actions</h3>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <Button type="primary" icon={<SaveOutlined />} className="mr-3 w-full">Sauvegarder</Button>
                            </div>
                            <div className="flex items-center">
                              <Button icon={<ShareAltOutlined />} className="mr-3 w-full">Partager</Button>
                            </div>
                            <div className="flex items-center">
                              <Select placeholder="Changer le statut" className="w-full">
                                <Select.Option value="paid">Payée</Select.Option>
                                <Select.Option value="pending">En attente</Select.Option>
                                <Select.Option value="overdue">En retard</Select.Option>
                              </Select>
                            </div>
                            <Divider />
                            <div>
                              <h4 className="font-medium mb-2">Historique</h4>
                              <Timeline>
                                <Timeline.Item>Créée le 28/04/2025</Timeline.Item>
                                <Timeline.Item>Envoyée le 28/04/2025</Timeline.Item>
                                <Timeline.Item>Vue par le client le 29/04/2025</Timeline.Item>
                              </Timeline>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400">
                      <FileTextOutlined style={{ fontSize: "64px" }} />
                      <p className="mt-4 text-lg">Sélectionnez une facture pour afficher son contenu</p>
                    </div>
                  )}
                </div>
              </div>
            </TabPane>
            <TabPane tab="Clients" key="3">
              <div className="mb-6 flex justify-between items-center">
                <Button type="primary" icon={<PlusOutlined />} className="cursor-pointer">Nouveau Client</Button>
                <Input prefix={<SearchOutlined />} placeholder="Rechercher un client..." className="w-72" />
              </div>

              <Table
                dataSource={[
                  { id: 1, name: "Entreprise ABC", contact: "Marie Dubois", email: "contact@abc.fr", phone: "01 23 45 67 89", invoices: 12 },
                  { id: 2, name: "Société XYZ", contact: "Pierre Martin", email: "info@xyz.fr", phone: "01 98 76 54 32", invoices: 8 },
                  { id: 3, name: "Boutique 123", contact: "Sophie Lefebvre", email: "boutique@123.fr", phone: "01 45 67 89 01", invoices: 5 },
                  { id: 4, name: "Restaurant Le Gourmet", contact: "Jean Moreau", email: "resto@legourmet.fr", phone: "01 56 78 90 12", invoices: 3 },
                  { id: 5, name: "Cabinet Juridique", contact: "Claire Dupont", email: "contact@cabinet.fr", phone: "01 23 45 67 89", invoices: 7 },
                ]}
                columns={[
                  { title: "Nom", dataIndex: "name", key: "name" },
                  { title: "Contact", dataIndex: "contact", key: "contact" },
                  { title: "Email", dataIndex: "email", key: "email" },
                  { title: "Téléphone", dataIndex: "phone", key: "phone" },
                  { title: "Factures", dataIndex: "invoices", key: "invoices" },
                  {
                    title: "Actions",
                    key: "actions",
                    render: () => (
                      <Space size="small">
                        <Button type="text" icon={<EyeOutlined />} className="cursor-pointer" />
                        <Button type="text" icon={<EditOutlined />} className="cursor-pointer" />
                        <Button type="text" icon={<DeleteOutlined />} className="cursor-pointer" />
                      </Space>
                    ),
                  },
                ]}
                pagination={{ pageSize: 10 }}
                rowKey="id"
                className="bg-white rounded-lg shadow-sm"
              />
            </TabPane>
            <TabPane tab="Paramètres" key="4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card title="Paramètres du Compte" className="shadow-sm">
                  <Form layout="vertical">
                    <Form.Item label="Nom de l'entreprise">
                      <Input defaultValue="Ma Société" />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input defaultValue="contact@masociete.fr" />
                    </Form.Item>
                    <Form.Item label="Téléphone">
                      <Input defaultValue="01 23 45 67 89" />
                    </Form.Item>
                    <Form.Item label="Adresse">
                      <Input.TextArea defaultValue="123 Rue des Entreprises, 75001 Paris" rows={3} />
                    </Form.Item>
                    <Button type="primary" className="cursor-pointer">Enregistrer</Button>
                  </Form>
                </Card>

                <Card title="Paramètres de Facturation" className="shadow-sm">
                  <Form layout="vertical">
                    <Form.Item label="Devise">
                      <Select defaultValue="EUR">
                        <Select.Option value="EUR">Euro (€)</Select.Option>
                        <Select.Option value="USD">Dollar US ($)</Select.Option>
                        <Select.Option value="GBP">Livre Sterling (£)</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Taux de TVA par défaut">
                      <Input defaultValue="20%" />
                    </Form.Item>
                    <Form.Item label="Conditions de paiement">
                      <Select defaultValue="30">
                        <Select.Option value="immediate">Immédiat</Select.Option>
                        <Select.Option value="15">15 jours</Select.Option>
                        <Select.Option value="30">30 jours</Select.Option>
                        <Select.Option value="60">60 jours</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Numéro de TVA">
                      <Input defaultValue="FR12345678901" />
                    </Form.Item>
                    <Button type="primary" className="cursor-pointer">Enregistrer</Button>
                  </Form>
                </Card>

                <Card title="Paramètres d'Affichage" className="shadow-sm">
                  <Form layout="vertical">
                    <Form.Item label="Thème">
                      <Select defaultValue="light">
                        <Select.Option value="light">Clair</Select.Option>
                        <Select.Option value="dark">Sombre</Select.Option>
                        <Select.Option value="auto">Automatique</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Langue">
                      <Select defaultValue="fr">
                        <Select.Option value="fr">Français</Select.Option>
                        <Select.Option value="en">Anglais</Select.Option>
                        <Select.Option value="es">Espagnol</Select.Option>
                        <Select.Option value="de">Allemand</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Format de date">
                      <Select defaultValue="dd/mm/yyyy">
                        <Select.Option value="dd/mm/yyyy">JJ/MM/AAAA</Select.Option>
                        <Select.Option value="mm/dd/yyyy">MM/JJ/AAAA</Select.Option>
                        <Select.Option value="yyyy-mm-dd">AAAA-MM-JJ</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Notifications">
                      <Switch defaultChecked />
                    </Form.Item>
                    <Button type="primary" className="cursor-pointer">Enregistrer</Button>
                  </Form>
                </Card>
              </div>
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
      <Footer className="bg-white text-center py-4 border-t">
        <div className="flex justify-between items-center">
          <div className="text-gray-500">© 2025 FacturePro. Tous droits réservés.</div>
          <div className="flex items-center">
            <Button type="link" className="text-gray-500 cursor-pointer">Aide</Button>
            <Button type="link" className="text-gray-500 cursor-pointer">Support</Button>
            <Button type="link" className="text-gray-500 cursor-pointer">Confidentialité</Button>
            <Button type="link" className="text-gray-500 cursor-pointer">Conditions</Button>
          </div>
          <div className="flex items-center">
            <i className="fab fa-cc-visa text-2xl mx-1 text-blue-700"></i>
            <i className="fab fa-cc-mastercard text-2xl mx-1 text-red-600"></i>
            <i className="fab fa-cc-paypal text-2xl mx-1 text-blue-800"></i>
          </div>
        </div>
      </Footer>

      <Modal
        title="Nouvelle Facture"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)} className="cursor-pointer">Annuler</Button>,
          <Button key="submit" type="primary" className="cursor-pointer">Créer</Button>,
        ]}
        width={800}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Créer Manuellement" key="1">
            <Form layout="vertical">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item label="Client">
                  <Select placeholder="Sélectionner un client">
                    <Select.Option value="1">Entreprise ABC</Select.Option>
                    <Select.Option value="2">Société XYZ</Select.Option>
                    <Select.Option value="3">Boutique 123</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Date de facturation">
                  <DatePicker className="w-full" />
                </Form.Item>
                <Form.Item label="Numéro de facture">
                  <Input placeholder="Auto-généré" disabled />
                </Form.Item>
                <Form.Item label="Date d'échéance">
                  <DatePicker className="w-full" />
                </Form.Item>
              </div>

              <Divider>Articles</Divider>

              <Table
                dataSource={[{ id: 1, description: "", quantity: 1, price: 0, tax: 20, total: 0 }]}
                columns={[
                  { title: "Description", dataIndex: "description", key: "description", render: () => <Input /> },
                  { title: "Quantité", dataIndex: "quantity", key: "quantity", render: () => <Input type="number" min={1} /> },
                  { title: "Prix unitaire", dataIndex: "price", key: "price", render: () => <Input prefix="€" /> },
                  { title: "TVA (%)", dataIndex: "tax", key: "tax", render: () => <Input type="number" defaultValue={20} /> },
                  { title: "Total", dataIndex: "total", key: "total", render: () => <Input prefix="€" disabled /> },
                  {
                    title: "",
                    key: "action",
                    render: () => (
                      <Button type="text" danger icon={<DeleteOutlined />} className="cursor-pointer" />
                    ),
                  },
                ]}
                pagination={false}
                rowKey="id"
                footer={() => (
                  <Button type="dashed" block icon={<PlusOutlined />} className="cursor-pointer">Ajouter un article</Button>
                )}
              />

              <div className="flex justify-end mt-4">
                <div className="w-64">
                  <div className="flex justify-between mb-2">
                    <span>Sous-total:</span>
                    <span>0.00 €</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>TVA:</span>
                    <span>0.00 €</span>
                  </div>
                  <Divider className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>0.00 €</span>
                  </div>
                </div>
              </div>

              <Form.Item label="Notes" className="mt-4">
                <Input.TextArea rows={3} placeholder="Notes ou conditions particulières..." />
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Importer un PDF" key="2">
            <div className="text-center py-10">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 mb-4">
                <CloudUploadOutlined style={{ fontSize: "48px" }} className="text-gray-400 mb-4" />
                <p className="text-gray-500 mb-4">Glissez-déposez un fichier PDF ou cliquez pour parcourir</p>
                <Button icon={<UploadOutlined />} className="cursor-pointer">Parcourir</Button>
              </div>
              <p className="text-gray-500">Formats supportés: PDF (max 10MB)</p>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </Layout>
  );
};

// Composant Timeline personnalisé
const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-l-2 border-gray-200 pl-4 ml-2 space-y-4">{children}</div>;
};

Timeline.Item = function Item({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-6 top-1.5"></div>
      <div>{children}</div>
    </div>
  );
};

// Composant Switch personnalisé
const Switch: React.FC<{ defaultChecked?: boolean }> = ({ defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked || false);

  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${checked ? "bg-blue-500" : "bg-gray-300"}`}
      onClick={() => setChecked(!checked)}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${checked ? "translate-x-6" : ""}`}
      />
    </div>
  );
};

export default App;
