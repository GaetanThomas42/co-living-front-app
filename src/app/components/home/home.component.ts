import { Component } from '@angular/core';
import Announcement from '../../models/announcement.interface';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  title: string = 'Mes annonces';

announcements :Announcement[] = [
  {
    id: 67,
    title: "Domaine viticole avec dégustation",
    description: "Magnifique logement situé en Montagne, parfait pour un séjour de détente. Récemment rénové avec goût, il allie confort moderne et charme authentique. L'espace de vie lumineux et spacieux offre une atmosphère chaleureuse. La cuisine entièrement équipée permet de préparer vos repas en toute convenance.",
    fullAddress: "3, avenue Fischer\n77047 Antoinedan",
    address: "rue Dominique Gerard\n05639 Alexandre",
    city: "RousseauVille",
    zipcode: "68878",
    lattitude: "41.342086",
    longitude: "5.393300",
    maxClient: 1,
    imageCover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    dailyPrice: 50,
    images: [
      {
        id: 217,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 218,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 219,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 220,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 72,
        title: "Linge de maison fourni",
        description: "Draps, serviettes et linge de toilette de qualité hôtelière"
      },
      {
        id: 76,
        title: "Courses livrées",
        description: "Service de courses avec livraison avant votre arrivée"
      },
      {
        id: 77,
        title: "Navette aéroport",
        description: "Transfer privé depuis/vers l'aéroport sur réservation"
      },
      {
        id: 79,
        title: "Guide touristique",
        description: "Guide local privé pour visites personnalisées de la région"
      },
      {
        id: 80,
        title: "Réservation restaurants",
        description: "Réservation dans les meilleurs restaurants de la ville"
      },
      {
        id: 82,
        title: "Massages à domicile",
        description: "Masseur professionnel se déplace dans le logement"
      },
      {
        id: 85,
        title: "Promenade d'animaux",
        description: "Service de promenade et garde pour vos animaux domestiques"
      },
      {
        id: 88,
        title: "Check-in tardif",
        description: "Possibilité d'arrivée tardive après 22h sans supplément"
      }
    ],
    equipments: [
      {
        id: 122,
        title: "Sèche-linge",
        description: "Sèche-linge à condensation 7kg avec capteur d'humidité"
      },
      {
        id: 125,
        title: "Cafetière",
        description: "Machine à café expresso automatique avec broyeur intégré"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 128,
        title: "Aspirateur",
        description: "Aspirateur sans sac avec accessoires pour tous types de sols"
      },
      {
        id: 129,
        title: "Fer à repasser",
        description: "Fer à repasser vapeur avec table à repasser pliante"
      },
      {
        id: 130,
        title: "Sèche-cheveux",
        description: "Sèche-cheveux professionnel 2000W avec diffuseur"
      },
      {
        id: 131,
        title: "Parking privé",
        description: "Place de parking sécurisée dans garage souterrain"
      },
      {
        id: 135,
        title: "Piscine",
        description: "Piscine chauffée avec système de filtration automatique"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 141,
        title: "Console de jeux",
        description: "PlayStation 5 avec manettes et sélection de jeux"
      },
      {
        id: 142,
        title: "Vélos",
        description: "Vélos de ville en libre service avec casques et antivols"
      },
      {
        id: 144,
        title: "Barbecue",
        description: "Barbecue au gaz avec plancha et ustensiles inclus"
      },
      {
        id: 145,
        title: "Lit bébé",
        description: "Lit bébé aux normes avec matelas et linge de lit"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  },
  {
    id: 68,
    title: "Gîte rural au cœur de la nature",
    description: "Vivez une expérience unique dans ce logement d'exception en Centre-ville. Chaque détail a été pensé pour votre confort et votre plaisir. Les équipements haut de gamme et les services inclus font de ce lieu un véritable cocon. L'environnement paisible est parfait pour se ressourcer.",
    fullAddress: "59, chemin de Hoareau\n05047 Bigot",
    address: "47, chemin de Martinez\n83867 Toussaint",
    city: "Reyboeuf",
    zipcode: "96890",
    lattitude: "42.207512",
    longitude: "6.054676",
    maxClient: 1,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    images: [
      {
        id: 221,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 222,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 223,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 224,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 75,
        title: "Petit-déjeuner livré",
        description: "Petit-déjeuner continental livré chaque matin à domicile"
      },
      {
        id: 77,
        title: "Navette aéroport",
        description: "Transfer privé depuis/vers l'aéroport sur réservation"
      },
      {
        id: 80,
        title: "Réservation restaurants",
        description: "Réservation dans les meilleurs restaurants de la ville"
      },
      {
        id: 81,
        title: "Billetterie spectacles",
        description: "Réservation de places pour concerts, théâtres et événements"
      },
      {
        id: 85,
        title: "Promenade d'animaux",
        description: "Service de promenade et garde pour vos animaux domestiques"
      },
      {
        id: 88,
        title: "Check-in tardif",
        description: "Possibilité d'arrivée tardive après 22h sans supplément"
      }
    ],
    equipments: [
      {
        id: 118,
        title: "Chauffage central",
        description: "Chauffage au gaz avec thermostat programmable"
      },
      {
        id: 120,
        title: "Lave-vaisselle",
        description: "Lave-vaisselle intégré 12 couverts, programmes éco"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 122,
        title: "Sèche-linge",
        description: "Sèche-linge à condensation 7kg avec capteur d'humidité"
      },
      {
        id: 125,
        title: "Cafetière",
        description: "Machine à café expresso automatique avec broyeur intégré"
      },
      {
        id: 131,
        title: "Parking privé",
        description: "Place de parking sécurisée dans garage souterrain"
      },
      {
        id: 132,
        title: "Balcon",
        description: "Balcon aménagé avec mobilier de jardin et vue panoramique"
      },
      {
        id: 134,
        title: "Jardin privatif",
        description: "Jardin clôturé avec pelouse et espace détente"
      },
      {
        id: 135,
        title: "Piscine",
        description: "Piscine chauffée avec système de filtration automatique"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 137,
        title: "Sauna",
        description: "Sauna traditionnel finlandais pour 4 personnes"
      },
      {
        id: 143,
        title: "Kayaks",
        description: "Kayaks bi-places avec gilets de sauvetage (accès lac/rivière)"
      },
      {
        id: 146,
        title: "Chaise haute",
        description: "Chaise haute évolutive avec harnais de sécurité"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      }
    ]
  },
  {
    id: 69,
    title: "Appart-hôtel services inclus",
    description: "Magnifique logement situé en Zone commerciale, parfait pour un séjour de détente. Récemment rénové avec goût, il allie confort moderne et charme authentique. L'espace de vie lumineux et spacieux offre une atmosphère chaleureuse. La cuisine entièrement équipée permet de préparer vos repas en toute convenance.",
    fullAddress: "85, rue Teixeira\n23856 Gay-la-Forêt",
    address: "3, boulevard de Lucas\n63112 Rodrigues",
    city: "Salmon-la-Forêt",
    zipcode: "13551",
    lattitude: "48.978999",
    longitude: "-2.848543",
    maxClient: 7,
    dailyPrice: 80,
    imageCover: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    images: [
      {
        id: 225,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 226,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 227,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 228,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 71,
        title: "Ménage inclus",
        description: "Service de ménage professionnel avant et après votre séjour"
      },
      {
        id: 73,
        title: "Accueil personnalisé",
        description: "Accueil sur place avec remise des clés et présentation du logement"
      },
      {
        id: 77,
        title: "Navette aéroport",
        description: "Transfer privé depuis/vers l'aéroport sur réservation"
      },
      {
        id: 79,
        title: "Guide touristique",
        description: "Guide local privé pour visites personnalisées de la région"
      },
      {
        id: 83,
        title: "Chef à domicile",
        description: "Chef cuisinier privé pour repas gastronomiques sur mesure"
      },
      {
        id: 88,
        title: "Check-in tardif",
        description: "Possibilité d'arrivée tardive après 22h sans supplément"
      }
    ],
    equipments: [
      {
        id: 116,
        title: "WiFi haut débit",
        description: "Connexion internet très haut débit (fibre optique) disponible dans tout le logement"
      },
      {
        id: 118,
        title: "Chauffage central",
        description: "Chauffage au gaz avec thermostat programmable"
      },
      {
        id: 124,
        title: "Réfrigérateur-congélateur",
        description: "Réfrigérateur américain avec distributeur d'eau fraîche"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 129,
        title: "Fer à repasser",
        description: "Fer à repasser vapeur avec table à repasser pliante"
      },
      {
        id: 130,
        title: "Sèche-cheveux",
        description: "Sèche-cheveux professionnel 2000W avec diffuseur"
      },
      {
        id: 131,
        title: "Parking privé",
        description: "Place de parking sécurisée dans garage souterrain"
      },
      {
        id: 132,
        title: "Balcon",
        description: "Balcon aménagé avec mobilier de jardin et vue panoramique"
      },
      {
        id: 134,
        title: "Jardin privatif",
        description: "Jardin clôturé avec pelouse et espace détente"
      },
      {
        id: 137,
        title: "Sauna",
        description: "Sauna traditionnel finlandais pour 4 personnes"
      },
      {
        id: 138,
        title: "Salle de sport",
        description: "Équipements de fitness : tapis de course, vélos, poids"
      },
      {
        id: 143,
        title: "Kayaks",
        description: "Kayaks bi-places avec gilets de sauvetage (accès lac/rivière)"
      },
      {
        id: 145,
        title: "Lit bébé",
        description: "Lit bébé aux normes avec matelas et linge de lit"
      },
      {
        id: 149,
        title: "Système d'alarme",
        description: "Système de sécurité avec télésurveillance 24h/24"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  },
  {
    id: 70,
    title: "Résidence de vacances all-inclusive",
    description: "Magnifique logement situé en Zone touristique, parfait pour un séjour de détente. Récemment rénové avec goût, il allie confort moderne et charme authentique. L'espace de vie lumineux et spacieux offre une atmosphère chaleureuse. La cuisine entièrement équipée permet de préparer vos repas en toute convenance.",
    fullAddress: "45, place Bertrand\n44995 Peltier",
    address: "42, chemin Perrot\n52388 Lecomte-la-Forêt",
    city: "Evrard-sur-Mer",
    zipcode: "66182",
    lattitude: "43.766186",
    longitude: "3.287953",
    maxClient: 3,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    images: [
      {
        id: 229,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 230,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 231,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 232,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 71,
        title: "Ménage inclus",
        description: "Service de ménage professionnel avant et après votre séjour"
      },
      {
        id: 73,
        title: "Accueil personnalisé",
        description: "Accueil sur place avec remise des clés et présentation du logement"
      },
      {
        id: 74,
        title: "Conciergerie 24h/24",
        description: "Service de conciergerie disponible jour et nuit pour vos demandes"
      },
      {
        id: 76,
        title: "Courses livrées",
        description: "Service de courses avec livraison avant votre arrivée"
      },
      {
        id: 77,
        title: "Navette aéroport",
        description: "Transfer privé depuis/vers l'aéroport sur réservation"
      },
      {
        id: 82,
        title: "Massages à domicile",
        description: "Masseur professionnel se déplace dans le logement"
      },
      {
        id: 89,
        title: "Stockage bagages",
        description: "Garde de bagages avant check-in ou après check-out"
      }
    ],
    equipments: [
      {
        id: 117,
        title: "Climatisation",
        description: "Système de climatisation dans toutes les pièces principales"
      },
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 132,
        title: "Balcon",
        description: "Balcon aménagé avec mobilier de jardin et vue panoramique"
      },
      {
        id: 134,
        title: "Jardin privatif",
        description: "Jardin clôturé avec pelouse et espace détente"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 137,
        title: "Sauna",
        description: "Sauna traditionnel finlandais pour 4 personnes"
      },
      {
        id: 142,
        title: "Vélos",
        description: "Vélos de ville en libre service avec casques et antivols"
      },
      {
        id: 145,
        title: "Lit bébé",
        description: "Lit bébé aux normes avec matelas et linge de lit"
      },
      {
        id: 147,
        title: "Poussette",
        description: "Poussette tout-terrain pliable avec ombrelle"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      },
      {
        id: 149,
        title: "Système d'alarme",
        description: "Système de sécurité avec télésurveillance 24h/24"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  },
  {
    id: 71,
    title: "F3 rénové dans résidence calme",
    description: "Découvrez ce superbe hébergement en Zone touristique, idéal pour explorer la région. Le logement dispose de tous les équipements nécessaires pour un séjour réussi. L'aménagement soigné et la décoration raffinée créent une ambiance unique. Profitez des espaces extérieurs pour vous détendre après vos visites.",
    fullAddress: "44, rue Carre\n54238 Schneider",
    address: "15, chemin de Weber\n21541 Lacroix-les-Bains",
    city: "Rodriguez",
    zipcode: "18616",
    lattitude: "44.968842",
    longitude: "3.920792",
    maxClient: 2,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
    images: [
      {
        id: 233,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 234,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 235,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 236,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 72,
        title: "Linge de maison fourni",
        description: "Draps, serviettes et linge de toilette de qualité hôtelière"
      },
      {
        id: 76,
        title: "Courses livrées",
        description: "Service de courses avec livraison avant votre arrivée"
      },
      {
        id: 78,
        title: "Location de voiture",
        description: "Véhicule de location disponible avec livraison sur place"
      },
      {
        id: 81,
        title: "Billetterie spectacles",
        description: "Réservation de places pour concerts, théâtres et événements"
      },
      {
        id: 84,
        title: "Baby-sitting",
        description: "Service de garde d'enfants par professionnels agréés"
      },
      {
        id: 87,
        title: "Maintenance technique",
        description: "Intervention rapide pour tout problème technique"
      },
      {
        id: 89,
        title: "Stockage bagages",
        description: "Garde de bagages avant check-in ou après check-out"
      },
      {
        id: 90,
        title: "WiFi professionnel",
        description: "Connexion internet renforcée pour télétravail"
      }
    ],
    equipments: [
      {
        id: 118,
        title: "Chauffage central",
        description: "Chauffage au gaz avec thermostat programmable"
      },
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 120,
        title: "Lave-vaisselle",
        description: "Lave-vaisselle intégré 12 couverts, programmes éco"
      },
      {
        id: 130,
        title: "Sèche-cheveux",
        description: "Sèche-cheveux professionnel 2000W avec diffuseur"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 140,
        title: "Piano",
        description: "Piano droit acoustique Yamaha accordé régulièrement"
      },
      {
        id: 142,
        title: "Vélos",
        description: "Vélos de ville en libre service avec casques et antivols"
      },
      {
        id: 145,
        title: "Lit bébé",
        description: "Lit bébé aux normes avec matelas et linge de lit"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      }
    ]
  },
  {
    id: 72,
    title: "Studio étudiant tout équipé",
    description: "Vivez une expérience unique dans ce logement d'exception en Zone touristique. Chaque détail a été pensé pour votre confort et votre plaisir. Les équipements haut de gamme et les services inclus font de ce lieu un véritable cocon. L'environnement paisible est parfait pour se ressourcer.",
    fullAddress: "impasse de Pruvost\n79639 Marechal",
    address: "boulevard Raymond\n08501 Remy",
    city: "Raymond",
    zipcode: "88392",
    lattitude: "44.916463",
    longitude: "8.315299",
    maxClient: 5,
    dailyPrice: 80,
    imageCover: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    images: [
      {
        id: 237,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 238,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 239,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 240,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 82,
        title: "Massages à domicile",
        description: "Masseur professionnel se déplace dans le logement"
      },
      {
        id: 84,
        title: "Baby-sitting",
        description: "Service de garde d'enfants par professionnels agréés"
      },
      {
        id: 86,
        title: "Laverie express",
        description: "Service de laverie avec récupération et livraison en 24h"
      }
    ],
    equipments: [
      {
        id: 118,
        title: "Chauffage central",
        description: "Chauffage au gaz avec thermostat programmable"
      },
      {
        id: 120,
        title: "Lave-vaisselle",
        description: "Lave-vaisselle intégré 12 couverts, programmes éco"
      },
      {
        id: 126,
        title: "Bouilloire électrique",
        description: "Bouilloire sans fil 1,7L avec arrêt automatique"
      },
      {
        id: 129,
        title: "Fer à repasser",
        description: "Fer à repasser vapeur avec table à repasser pliante"
      },
      {
        id: 130,
        title: "Sèche-cheveux",
        description: "Sèche-cheveux professionnel 2000W avec diffuseur"
      },
      {
        id: 133,
        title: "Terrasse",
        description: "Grande terrasse privative avec salon de jardin et barbecue"
      },
      {
        id: 134,
        title: "Jardin privatif",
        description: "Jardin clôturé avec pelouse et espace détente"
      },
      {
        id: 135,
        title: "Piscine",
        description: "Piscine chauffée avec système de filtration automatique"
      },
      {
        id: 142,
        title: "Vélos",
        description: "Vélos de ville en libre service avec casques et antivols"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  },
  {
    id: 73,
    title: "Chambre d'hôtes de luxe",
    description: "Découvrez ce superbe hébergement en Bord de mer, idéal pour explorer la région. Le logement dispose de tous les équipements nécessaires pour un séjour réussi. L'aménagement soigné et la décoration raffinée créent une ambiance unique. Profitez des espaces extérieurs pour vous détendre après vos visites.",
    fullAddress: "66, rue de Guillou\n67595 BerthelotBourg",
    address: "8, avenue Nathalie Gilles\n20413 Girard",
    city: "Leleu",
    zipcode: "40415",
    lattitude: "46.455173",
    longitude: "0.856917",
    maxClient: 8,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    images: [
      {
        id: 241,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 242,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 243,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 244,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 75,
        title: "Petit-déjeuner livré",
        description: "Petit-déjeuner continental livré chaque matin à domicile"
      },
      {
        id: 76,
        title: "Courses livrées",
        description: "Service de courses avec livraison avant votre arrivée"
      },
      {
        id: 79,
        title: "Guide touristique",
        description: "Guide local privé pour visites personnalisées de la région"
      },
      {
        id: 83,
        title: "Chef à domicile",
        description: "Chef cuisinier privé pour repas gastronomiques sur mesure"
      },
      {
        id: 84,
        title: "Baby-sitting",
        description: "Service de garde d'enfants par professionnels agréés"
      },
      {
        id: 87,
        title: "Maintenance technique",
        description: "Intervention rapide pour tout problème technique"
      }
    ],
    equipments: [
      {
        id: 117,
        title: "Climatisation",
        description: "Système de climatisation dans toutes les pièces principales"
      },
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 128,
        title: "Aspirateur",
        description: "Aspirateur sans sac avec accessoires pour tous types de sols"
      },
      {
        id: 131,
        title: "Parking privé",
        description: "Place de parking sécurisée dans garage souterrain"
      },
      {
        id: 132,
        title: "Balcon",
        description: "Balcon aménagé avec mobilier de jardin et vue panoramique"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 139,
        title: "Cheminée",
        description: "Cheminée à insert avec bois fourni pour soirées cosy"
      },
      {
        id: 140,
        title: "Piano",
        description: "Piano droit acoustique Yamaha accordé régulièrement"
      },
      {
        id: 144,
        title: "Barbecue",
        description: "Barbecue au gaz avec plancha et ustensiles inclus"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      }
    ]
  },
  {
    id: 74,
    title: "Duplex lumineux proche commerces",
    description: "Vivez une expérience unique dans ce logement d'exception en Centre-ville. Chaque détail a été pensé pour votre confort et votre plaisir. Les équipements haut de gamme et les services inclus font de ce lieu un véritable cocon. L'environnement paisible est parfait pour se ressourcer.",
    fullAddress: "26, boulevard de Tanguy\n99452 BertinVille",
    address: "place Rey\n22425 Chevalier",
    city: "Carpentier-sur-Ollivier",
    zipcode: "38348",
    lattitude: "49.672786",
    longitude: "2.141096",
    maxClient: 1,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    images: [
      {
        id: 245,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 246,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 247,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 248,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 71,
        title: "Ménage inclus",
        description: "Service de ménage professionnel avant et après votre séjour"
      },
      {
        id: 86,
        title: "Laverie express",
        description: "Service de laverie avec récupération et livraison en 24h"
      },
      {
        id: 88,
        title: "Check-in tardif",
        description: "Possibilité d'arrivée tardive après 22h sans supplément"
      },
      {
        id: 90,
        title: "WiFi professionnel",
        description: "Connexion internet renforcée pour télétravail"
      }
    ],
    equipments: [
      {
        id: 117,
        title: "Climatisation",
        description: "Système de climatisation dans toutes les pièces principales"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 124,
        title: "Réfrigérateur-congélateur",
        description: "Réfrigérateur américain avec distributeur d'eau fraîche"
      },
      {
        id: 131,
        title: "Parking privé",
        description: "Place de parking sécurisée dans garage souterrain"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 139,
        title: "Cheminée",
        description: "Cheminée à insert avec bois fourni pour soirées cosy"
      },
      {
        id: 143,
        title: "Kayaks",
        description: "Kayaks bi-places avec gilets de sauvetage (accès lac/rivière)"
      },
      {
        id: 144,
        title: "Barbecue",
        description: "Barbecue au gaz avec plancha et ustensiles inclus"
      },
      {
        id: 146,
        title: "Chaise haute",
        description: "Chaise haute évolutive avec harnais de sécurité"
      },
      {
        id: 147,
        title: "Poussette",
        description: "Poussette tout-terrain pliable avec ombrelle"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      },
      {
        id: 149,
        title: "Système d'alarme",
        description: "Système de sécurité avec télésurveillance 24h/24"
      }
    ]
  },
  {
    id: 75,
    title: "Appartement vintage années 70",
    description: "Séjournez dans ce charmant logement en Quartier historique, conçu pour votre bien-être. Les pièces spacieuses et lumineuses offrent un cadre de vie agréable. La literie de qualité garantit des nuits reposantes. L'emplacement privilégié vous permet d'accéder facilement aux attractions locales.",
    fullAddress: "43, chemin de Caron\n78763 Buisson-sur-Philippe",
    address: "chemin de Dumas\n49274 Poirier",
    city: "Chevallier-sur-Vincent",
    zipcode: "53486",
    lattitude: "44.835611",
    longitude: "-0.500470",
    maxClient: 2,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    images: [
      {
        id: 249,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 250,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 251,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 252,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 74,
        title: "Conciergerie 24h/24",
        description: "Service de conciergerie disponible jour et nuit pour vos demandes"
      },
      {
        id: 75,
        title: "Petit-déjeuner livré",
        description: "Petit-déjeuner continental livré chaque matin à domicile"
      },
      {
        id: 78,
        title: "Location de voiture",
        description: "Véhicule de location disponible avec livraison sur place"
      },
      {
        id: 83,
        title: "Chef à domicile",
        description: "Chef cuisinier privé pour repas gastronomiques sur mesure"
      }
    ],
    equipments: [
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 125,
        title: "Cafetière",
        description: "Machine à café expresso automatique avec broyeur intégré"
      },
      {
        id: 126,
        title: "Bouilloire électrique",
        description: "Bouilloire sans fil 1,7L avec arrêt automatique"
      },
      {
        id: 128,
        title: "Aspirateur",
        description: "Aspirateur sans sac avec accessoires pour tous types de sols"
      },
      {
        id: 134,
        title: "Jardin privatif",
        description: "Jardin clôturé avec pelouse et espace détente"
      },
      {
        id: 135,
        title: "Piscine",
        description: "Piscine chauffée avec système de filtration automatique"
      },
      {
        id: 141,
        title: "Console de jeux",
        description: "PlayStation 5 avec manettes et sélection de jeux"
      },
      {
        id: 142,
        title: "Vélos",
        description: "Vélos de ville en libre service avec casques et antivols"
      }
    ]
  },
  {
    id: 76,
    title: "Appartement cosy proche métro",
    description: "Vivez une expérience unique dans ce logement d'exception en Zone touristique. Chaque détail a été pensé pour votre confort et votre plaisir. Les équipements haut de gamme et les services inclus font de ce lieu un véritable cocon. L'environnement paisible est parfait pour se ressourcer.",
    fullAddress: "1, chemin Guibert\n84865 Georges",
    address: "54, impasse Ruiz\n94930 Ruiz",
    city: "Lacroix",
    zipcode: "49961",
    lattitude: "44.891478",
    longitude: "7.343819",
    maxClient: 1,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    images: [
      {
        id: 253,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 254,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 255,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 256,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 76,
        title: "Courses livrées",
        description: "Service de courses avec livraison avant votre arrivée"
      },
      {
        id: 77,
        title: "Navette aéroport",
        description: "Transfer privé depuis/vers l'aéroport sur réservation"
      },
      {
        id: 79,
        title: "Guide touristique",
        description: "Guide local privé pour visites personnalisées de la région"
      },
      {
        id: 80,
        title: "Réservation restaurants",
        description: "Réservation dans les meilleurs restaurants de la ville"
      },
      {
        id: 83,
        title: "Chef à domicile",
        description: "Chef cuisinier privé pour repas gastronomiques sur mesure"
      },
      {
        id: 85,
        title: "Promenade d'animaux",
        description: "Service de promenade et garde pour vos animaux domestiques"
      },
      {
        id: 89,
        title: "Stockage bagages",
        description: "Garde de bagages avant check-in ou après check-out"
      }
    ],
    equipments: [
      {
        id: 116,
        title: "WiFi haut débit",
        description: "Connexion internet très haut débit (fibre optique) disponible dans tout le logement"
      },
      {
        id: 120,
        title: "Lave-vaisselle",
        description: "Lave-vaisselle intégré 12 couverts, programmes éco"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 135,
        title: "Piscine",
        description: "Piscine chauffée avec système de filtration automatique"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 138,
        title: "Salle de sport",
        description: "Équipements de fitness : tapis de course, vélos, poids"
      },
      {
        id: 139,
        title: "Cheminée",
        description: "Cheminée à insert avec bois fourni pour soirées cosy"
      },
      {
        id: 140,
        title: "Piano",
        description: "Piano droit acoustique Yamaha accordé régulièrement"
      },
      {
        id: 141,
        title: "Console de jeux",
        description: "PlayStation 5 avec manettes et sélection de jeux"
      },
      {
        id: 142,
        title: "Vélos",
        description: "Vélos de ville en libre service avec casques et antivols"
      },
      {
        id: 145,
        title: "Lit bébé",
        description: "Lit bébé aux normes avec matelas et linge de lit"
      },
      {
        id: 147,
        title: "Poussette",
        description: "Poussette tout-terrain pliable avec ombrelle"
      }
    ]
  },
  {
    id: 77,
    title: "Domaine viticole avec dégustation",
    description: "Découvrez ce superbe hébergement en Centre-ville, idéal pour explorer la région. Le logement dispose de tous les équipements nécessaires pour un séjour réussi. L'aménagement soigné et la décoration raffinée créent une ambiance unique. Profitez des espaces extérieurs pour vous détendre après vos visites.",
    fullAddress: "chemin de Vidal\n45902 RogerVille",
    address: "impasse William Marchand\n15397 Masse",
    city: "Joly",
    zipcode: "25460",
    lattitude: "50.186451",
    longitude: "2.770789",
    maxClient: 6,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    images: [
      {
        id: 257,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 258,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 259,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 260,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 72,
        title: "Linge de maison fourni",
        description: "Draps, serviettes et linge de toilette de qualité hôtelière"
      },
      {
        id: 76,
        title: "Courses livrées",
        description: "Service de courses avec livraison avant votre arrivée"
      },
      {
        id: 90,
        title: "WiFi professionnel",
        description: "Connexion internet renforcée pour télétravail"
      }
    ],
    equipments: [
      {
        id: 117,
        title: "Climatisation",
        description: "Système de climatisation dans toutes les pièces principales"
      },
      {
        id: 120,
        title: "Lave-vaisselle",
        description: "Lave-vaisselle intégré 12 couverts, programmes éco"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 122,
        title: "Sèche-linge",
        description: "Sèche-linge à condensation 7kg avec capteur d'humidité"
      },
      {
        id: 128,
        title: "Aspirateur",
        description: "Aspirateur sans sac avec accessoires pour tous types de sols"
      },
      {
        id: 129,
        title: "Fer à repasser",
        description: "Fer à repasser vapeur avec table à repasser pliante"
      },
      {
        id: 132,
        title: "Balcon",
        description: "Balcon aménagé avec mobilier de jardin et vue panoramique"
      },
      {
        id: 134,
        title: "Jardin privatif",
        description: "Jardin clôturé avec pelouse et espace détente"
      },
      {
        id: 135,
        title: "Piscine",
        description: "Piscine chauffée avec système de filtration automatique"
      },
      {
        id: 139,
        title: "Cheminée",
        description: "Cheminée à insert avec bois fourni pour soirées cosy"
      }
    ]
  },
  {
    id: 78,
    title: "Studio étudiant tout équipé",
    description: "Magnifique logement situé en Zone touristique, parfait pour un séjour de détente. Récemment rénové avec goût, il allie confort moderne et charme authentique. L'espace de vie lumineux et spacieux offre une atmosphère chaleureuse. La cuisine entièrement équipée permet de préparer vos repas en toute convenance.",
    fullAddress: "27, boulevard Élodie Gilbert\n68784 Hamon-sur-Mer",
    address: "31, avenue Chevalier\n23922 De Sousa",
    city: "Chauvet",
    zipcode: "77413",
    lattitude: "48.799289",
    longitude: "3.346791",
    maxClient: 2,
    dailyPrice: 90,
    imageCover: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    images: [
      {
        id: 261,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 262,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 263,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 264,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 72,
        title: "Linge de maison fourni",
        description: "Draps, serviettes et linge de toilette de qualité hôtelière"
      },
      {
        id: 74,
        title: "Conciergerie 24h/24",
        description: "Service de conciergerie disponible jour et nuit pour vos demandes"
      },
      {
        id: 80,
        title: "Réservation restaurants",
        description: "Réservation dans les meilleurs restaurants de la ville"
      },
      {
        id: 82,
        title: "Massages à domicile",
        description: "Masseur professionnel se déplace dans le logement"
      },
      {
        id: 84,
        title: "Baby-sitting",
        description: "Service de garde d'enfants par professionnels agréés"
      },
      {
        id: 88,
        title: "Check-in tardif",
        description: "Possibilité d'arrivée tardive après 22h sans supplément"
      },
      {
        id: 90,
        title: "WiFi professionnel",
        description: "Connexion internet renforcée pour télétravail"
      }
    ],
    equipments: [
      {
        id: 117,
        title: "Climatisation",
        description: "Système de climatisation dans toutes les pièces principales"
      },
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 120,
        title: "Lave-vaisselle",
        description: "Lave-vaisselle intégré 12 couverts, programmes éco"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 122,
        title: "Sèche-linge",
        description: "Sèche-linge à condensation 7kg avec capteur d'humidité"
      },
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 125,
        title: "Cafetière",
        description: "Machine à café expresso automatique avec broyeur intégré"
      },
      {
        id: 126,
        title: "Bouilloire électrique",
        description: "Bouilloire sans fil 1,7L avec arrêt automatique"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 128,
        title: "Aspirateur",
        description: "Aspirateur sans sac avec accessoires pour tous types de sols"
      },
      {
        id: 130,
        title: "Sèche-cheveux",
        description: "Sèche-cheveux professionnel 2000W avec diffuseur"
      },
      {
        id: 139,
        title: "Cheminée",
        description: "Cheminée à insert avec bois fourni pour soirées cosy"
      },
      {
        id: 144,
        title: "Barbecue",
        description: "Barbecue au gaz avec plancha et ustensiles inclus"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  },
  {
    id: 79,
    title: "Loft d'artiste atypique",
    description: "Magnifique logement situé en Quartier historique, parfait pour un séjour de détente. Récemment rénové avec goût, il allie confort moderne et charme authentique. L'espace de vie lumineux et spacieux offre une atmosphère chaleureuse. La cuisine entièrement équipée permet de préparer vos repas en toute convenance.",
    fullAddress: "5, rue Catherine Cousin\n84570 Guillou",
    address: "rue de Pages\n55597 Lopez-sur-Jacquet",
    city: "Petitjeannec",
    zipcode: "66627",
    lattitude: "46.190957",
    longitude: "3.059369",
    maxClient: 8,
    dailyPrice: 64,
    imageCover: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    images: [
      {
        id: 265,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 266,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 267,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 268,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 73,
        title: "Accueil personnalisé",
        description: "Accueil sur place avec remise des clés et présentation du logement"
      },
      {
        id: 76,
        title: "Courses livrées",
        description: "Service de courses avec livraison avant votre arrivée"
      },
      {
        id: 78,
        title: "Location de voiture",
        description: "Véhicule de location disponible avec livraison sur place"
      },
      {
        id: 85,
        title: "Promenade d'animaux",
        description: "Service de promenade et garde pour vos animaux domestiques"
      },
      {
        id: 87,
        title: "Maintenance technique",
        description: "Intervention rapide pour tout problème technique"
      }
    ],
    equipments: [
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 120,
        title: "Lave-vaisselle",
        description: "Lave-vaisselle intégré 12 couverts, programmes éco"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 126,
        title: "Bouilloire électrique",
        description: "Bouilloire sans fil 1,7L avec arrêt automatique"
      },
      {
        id: 129,
        title: "Fer à repasser",
        description: "Fer à repasser vapeur avec table à repasser pliante"
      },
      {
        id: 134,
        title: "Jardin privatif",
        description: "Jardin clôturé avec pelouse et espace détente"
      },
      {
        id: 137,
        title: "Sauna",
        description: "Sauna traditionnel finlandais pour 4 personnes"
      },
      {
        id: 141,
        title: "Console de jeux",
        description: "PlayStation 5 avec manettes et sélection de jeux"
      },
      {
        id: 143,
        title: "Kayaks",
        description: "Kayaks bi-places avec gilets de sauvetage (accès lac/rivière)"
      },
      {
        id: 144,
        title: "Barbecue",
        description: "Barbecue au gaz avec plancha et ustensiles inclus"
      },
      {
        id: 146,
        title: "Chaise haute",
        description: "Chaise haute évolutive avec harnais de sécurité"
      }
    ]
  },
  {
    id: 80,
    title: "Fermette restaurée cadre bucolique",
    description: "Vivez une expérience unique dans ce logement d'exception en Quartier historique. Chaque détail a été pensé pour votre confort et votre plaisir. Les équipements haut de gamme et les services inclus font de ce lieu un véritable cocon. L'environnement paisible est parfait pour se ressourcer.",
    fullAddress: "14, boulevard de Mallet\n25826 Boulay",
    address: "5, chemin Gaillard\n24862 Turpin",
    city: "Herve-la-Forêt",
    zipcode: "97179",
    lattitude: "43.156477",
    longitude: "0.906909",
    maxClient: 4,
    dailyPrice: 30,
    imageCover: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
    images: [
      {
        id: 269,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 270,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 271,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 272,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 74,
        title: "Conciergerie 24h/24",
        description: "Service de conciergerie disponible jour et nuit pour vos demandes"
      },
      {
        id: 77,
        title: "Navette aéroport",
        description: "Transfer privé depuis/vers l'aéroport sur réservation"
      },
      {
        id: 81,
        title: "Billetterie spectacles",
        description: "Réservation de places pour concerts, théâtres et événements"
      },
      {
        id: 83,
        title: "Chef à domicile",
        description: "Chef cuisinier privé pour repas gastronomiques sur mesure"
      },
      {
        id: 84,
        title: "Baby-sitting",
        description: "Service de garde d'enfants par professionnels agréés"
      },
      {
        id: 88,
        title: "Check-in tardif",
        description: "Possibilité d'arrivée tardive après 22h sans supplément"
      },
      {
        id: 89,
        title: "Stockage bagages",
        description: "Garde de bagages avant check-in ou après check-out"
      },
      {
        id: 90,
        title: "WiFi professionnel",
        description: "Connexion internet renforcée pour télétravail"
      }
    ],
    equipments: [
      {
        id: 117,
        title: "Climatisation",
        description: "Système de climatisation dans toutes les pièces principales"
      },
      {
        id: 118,
        title: "Chauffage central",
        description: "Chauffage au gaz avec thermostat programmable"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 122,
        title: "Sèche-linge",
        description: "Sèche-linge à condensation 7kg avec capteur d'humidité"
      },
      {
        id: 125,
        title: "Cafetière",
        description: "Machine à café expresso automatique avec broyeur intégré"
      },
      {
        id: 126,
        title: "Bouilloire électrique",
        description: "Bouilloire sans fil 1,7L avec arrêt automatique"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 131,
        title: "Parking privé",
        description: "Place de parking sécurisée dans garage souterrain"
      },
      {
        id: 133,
        title: "Terrasse",
        description: "Grande terrasse privative avec salon de jardin et barbecue"
      },
      {
        id: 138,
        title: "Salle de sport",
        description: "Équipements de fitness : tapis de course, vélos, poids"
      },
      {
        id: 139,
        title: "Cheminée",
        description: "Cheminée à insert avec bois fourni pour soirées cosy"
      },
      {
        id: 144,
        title: "Barbecue",
        description: "Barbecue au gaz avec plancha et ustensiles inclus"
      },
      {
        id: 145,
        title: "Lit bébé",
        description: "Lit bébé aux normes avec matelas et linge de lit"
      },
      {
        id: 147,
        title: "Poussette",
        description: "Poussette tout-terrain pliable avec ombrelle"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  },
  {
    id: 81,
    title: "Chalet montagnard tout confort",
    description: "Découvrez ce superbe hébergement en Zone commerciale, idéal pour explorer la région. Le logement dispose de tous les équipements nécessaires pour un séjour réussi. L'aménagement soigné et la décoration raffinée créent une ambiance unique. Profitez des espaces extérieurs pour vous détendre après vos visites.",
    fullAddress: "99, rue Bodin\n44209 Legendre-sur-Mer",
    address: "45, place Alexandrie Lecomte\n15053 Ferreira",
    city: "Levy",
    zipcode: "05624",
    lattitude: "44.254795",
    longitude: "-4.037981",
    maxClient: 7,
    dailyPrice: 90,
    imageCover: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      {
        id: 274,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 275,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 276,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 277,
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 78,
        title: "Location de voiture",
        description: "Véhicule de location disponible avec livraison sur place"
      },
      {
        id: 79,
        title: "Guide touristique",
        description: "Guide local privé pour visites personnalisées de la région"
      },
      {
        id: 83,
        title: "Chef à domicile",
        description: "Chef cuisinier privé pour repas gastronomiques sur mesure"
      },
      {
        id: 84,
        title: "Baby-sitting",
        description: "Service de garde d'enfants par professionnels agréés"
      },
      {
        id: 85,
        title: "Promenade d'animaux",
        description: "Service de promenade et garde pour vos animaux domestiques"
      },
      {
        id: 86,
        title: "Laverie express",
        description: "Service de laverie avec récupération et livraison en 24h"
      },
      {
        id: 88,
        title: "Check-in tardif",
        description: "Possibilité d'arrivée tardive après 22h sans supplément"
      },
      {
        id: 90,
        title: "WiFi professionnel",
        description: "Connexion internet renforcée pour télétravail"
      }
    ],
    equipments: [
      {
        id: 118,
        title: "Chauffage central",
        description: "Chauffage au gaz avec thermostat programmable"
      },
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 129,
        title: "Fer à repasser",
        description: "Fer à repasser vapeur avec table à repasser pliante"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 139,
        title: "Cheminée",
        description: "Cheminée à insert avec bois fourni pour soirées cosy"
      },
      {
        id: 140,
        title: "Piano",
        description: "Piano droit acoustique Yamaha accordé régulièrement"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      },
      {
        id: 149,
        title: "Système d'alarme",
        description: "Système de sécurité avec télésurveillance 24h/24"
      }
    ]
  },
  {
    id: 82,
    title: "Studio étudiant tout équipé",
    description: "Magnifique logement situé en Campagne, parfait pour un séjour de détente. Récemment rénové avec goût, il allie confort moderne et charme authentique. L'espace de vie lumineux et spacieux offre une atmosphère chaleureuse. La cuisine entièrement équipée permet de préparer vos repas en toute convenance.",
    fullAddress: "5, boulevard Gregoire\n93020 Rousset",
    address: "place de Breton\n88776 Pruvost-les-Bains",
    city: "Boucher-sur-Salmon",
    zipcode: "24857",
    lattitude: "47.554191",
    longitude: "2.316591",
    maxClient: 2,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    images: [
      {
        id: 278,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 279,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 280,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 281,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 72,
        title: "Linge de maison fourni",
        description: "Draps, serviettes et linge de toilette de qualité hôtelière"
      },
      {
        id: 76,
        title: "Courses livrées",
        description: "Service de courses avec livraison avant votre arrivée"
      },
      {
        id: 77,
        title: "Navette aéroport",
        description: "Transfer privé depuis/vers l'aéroport sur réservation"
      },
      {
        id: 81,
        title: "Billetterie spectacles",
        description: "Réservation de places pour concerts, théâtres et événements"
      },
      {
        id: 89,
        title: "Stockage bagages",
        description: "Garde de bagages avant check-in ou après check-out"
      },
      {
        id: 90,
        title: "WiFi professionnel",
        description: "Connexion internet renforcée pour télétravail"
      }
    ],
    equipments: [
      {
        id: 117,
        title: "Climatisation",
        description: "Système de climatisation dans toutes les pièces principales"
      },
      {
        id: 124,
        title: "Réfrigérateur-congélateur",
        description: "Réfrigérateur américain avec distributeur d'eau fraîche"
      },
      {
        id: 125,
        title: "Cafetière",
        description: "Machine à café expresso automatique avec broyeur intégré"
      },
      {
        id: 132,
        title: "Balcon",
        description: "Balcon aménagé avec mobilier de jardin et vue panoramique"
      },
      {
        id: 133,
        title: "Terrasse",
        description: "Grande terrasse privative avec salon de jardin et barbecue"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 144,
        title: "Barbecue",
        description: "Barbecue au gaz avec plancha et ustensiles inclus"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      },
      {
        id: 149,
        title: "Système d'alarme",
        description: "Système de sécurité avec télésurveillance 24h/24"
      }
    ]
  },
  {
    id: 83,
    title: "Studio étudiant tout équipé",
    description: "Magnifique logement situé en Quartier résidentiel, parfait pour un séjour de détente. Récemment rénové avec goût, il allie confort moderne et charme authentique. L'espace de vie lumineux et spacieux offre une atmosphère chaleureuse. La cuisine entièrement équipée permet de préparer vos repas en toute convenance.",
    fullAddress: "86, rue Rocher\n13195 Allain-sur-Besnard",
    address: "place Léon Bonnin\n17135 Rey",
    city: "BouvetVille",
    zipcode: "88661",
    lattitude: "47.263310",
    longitude: "2.414013",
    maxClient: 1,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    images: [
      {
        id: 282,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 283,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 284,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 285,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 73,
        title: "Accueil personnalisé",
        description: "Accueil sur place avec remise des clés et présentation du logement"
      },
      {
        id: 81,
        title: "Billetterie spectacles",
        description: "Réservation de places pour concerts, théâtres et événements"
      },
      {
        id: 85,
        title: "Promenade d'animaux",
        description: "Service de promenade et garde pour vos animaux domestiques"
      },
      {
        id: 86,
        title: "Laverie express",
        description: "Service de laverie avec récupération et livraison en 24h"
      },
      {
        id: 87,
        title: "Maintenance technique",
        description: "Intervention rapide pour tout problème technique"
      },
      {
        id: 88,
        title: "Check-in tardif",
        description: "Possibilité d'arrivée tardive après 22h sans supplément"
      },
      {
        id: 90,
        title: "WiFi professionnel",
        description: "Connexion internet renforcée pour télétravail"
      }
    ],
    equipments: [
      {
        id: 116,
        title: "WiFi haut débit",
        description: "Connexion internet très haut débit (fibre optique) disponible dans tout le logement"
      },
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 130,
        title: "Sèche-cheveux",
        description: "Sèche-cheveux professionnel 2000W avec diffuseur"
      },
      {
        id: 134,
        title: "Jardin privatif",
        description: "Jardin clôturé avec pelouse et espace détente"
      },
      {
        id: 139,
        title: "Cheminée",
        description: "Cheminée à insert avec bois fourni pour soirées cosy"
      },
      {
        id: 140,
        title: "Piano",
        description: "Piano droit acoustique Yamaha accordé régulièrement"
      },
      {
        id: 143,
        title: "Kayaks",
        description: "Kayaks bi-places avec gilets de sauvetage (accès lac/rivière)"
      },
      {
        id: 146,
        title: "Chaise haute",
        description: "Chaise haute évolutive avec harnais de sécurité"
      },
      {
        id: 149,
        title: "Système d'alarme",
        description: "Système de sécurité avec télésurveillance 24h/24"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  },
  {
    id: 84,
    title: "Longère bretonne typique",
    description: "Vivez une expérience unique dans ce logement d'exception en Quartier résidentiel. Chaque détail a été pensé pour votre confort et votre plaisir. Les équipements haut de gamme et les services inclus font de ce lieu un véritable cocon. L'environnement paisible est parfait pour se ressourcer.",
    fullAddress: "chemin Fernandez\n94452 Munozdan",
    address: "59, place Denis Andre\n22958 FouquetVille",
    city: "Guibertdan",
    zipcode: "95908",
    lattitude: "46.942452",
    longitude: "6.638826",
    maxClient: 1,
    dailyPrice: 70,
    imageCover: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
    images: [
      {
        id: 286,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 287,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 288,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 289,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 73,
        title: "Accueil personnalisé",
        description: "Accueil sur place avec remise des clés et présentation du logement"
      },
      {
        id: 81,
        title: "Billetterie spectacles",
        description: "Réservation de places pour concerts, théâtres et événements"
      },
      {
        id: 86,
        title: "Laverie express",
        description: "Service de laverie avec récupération et livraison en 24h"
      },
      {
        id: 90,
        title: "WiFi professionnel",
        description: "Connexion internet renforcée pour télétravail"
      }
    ],
    equipments: [
      {
        id: 117,
        title: "Climatisation",
        description: "Système de climatisation dans toutes les pièces principales"
      },
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 120,
        title: "Lave-vaisselle",
        description: "Lave-vaisselle intégré 12 couverts, programmes éco"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 124,
        title: "Réfrigérateur-congélateur",
        description: "Réfrigérateur américain avec distributeur d'eau fraîche"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 128,
        title: "Aspirateur",
        description: "Aspirateur sans sac avec accessoires pour tous types de sols"
      },
      {
        id: 135,
        title: "Piscine",
        description: "Piscine chauffée avec système de filtration automatique"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 143,
        title: "Kayaks",
        description: "Kayaks bi-places avec gilets de sauvetage (accès lac/rivière)"
      },
      {
        id: 145,
        title: "Lit bébé",
        description: "Lit bébé aux normes avec matelas et linge de lit"
      },
      {
        id: 146,
        title: "Chaise haute",
        description: "Chaise haute évolutive avec harnais de sécurité"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      }
    ]
  },
  {
    id: 85,
    title: "Mas provençal avec oliveraie",
    description: "Vivez une expérience unique dans ce logement d'exception en Quartier résidentiel. Chaque détail a été pensé pour votre confort et votre plaisir. Les équipements haut de gamme et les services inclus font de ce lieu un véritable cocon. L'environnement paisible est parfait pour se ressourcer.",
    fullAddress: "28, place Blondel\n91060 Allard-sur-Pires",
    address: "rue Marchal\n80205 Lacombenec",
    city: "Maillet-sur-Besnard",
    zipcode: "48400",
    lattitude: "44.383629",
    longitude: "2.292353",
    maxClient: 7,
    dailyPrice: 60,
    imageCover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    images: [
      {
        id: 290,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 291,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 292,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 293,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 71,
        title: "Ménage inclus",
        description: "Service de ménage professionnel avant et après votre séjour"
      },
      {
        id: 74,
        title: "Conciergerie 24h/24",
        description: "Service de conciergerie disponible jour et nuit pour vos demandes"
      },
      {
        id: 81,
        title: "Billetterie spectacles",
        description: "Réservation de places pour concerts, théâtres et événements"
      },
      {
        id: 82,
        title: "Massages à domicile",
        description: "Masseur professionnel se déplace dans le logement"
      },
      {
        id: 84,
        title: "Baby-sitting",
        description: "Service de garde d'enfants par professionnels agréés"
      }
    ],
    equipments: [
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 125,
        title: "Cafetière",
        description: "Machine à café expresso automatique avec broyeur intégré"
      },
      {
        id: 126,
        title: "Bouilloire électrique",
        description: "Bouilloire sans fil 1,7L avec arrêt automatique"
      },
      {
        id: 128,
        title: "Aspirateur",
        description: "Aspirateur sans sac avec accessoires pour tous types de sols"
      },
      {
        id: 129,
        title: "Fer à repasser",
        description: "Fer à repasser vapeur avec table à repasser pliante"
      },
      {
        id: 132,
        title: "Balcon",
        description: "Balcon aménagé avec mobilier de jardin et vue panoramique"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 137,
        title: "Sauna",
        description: "Sauna traditionnel finlandais pour 4 personnes"
      },
      {
        id: 138,
        title: "Salle de sport",
        description: "Équipements de fitness : tapis de course, vélos, poids"
      },
      {
        id: 142,
        title: "Vélos",
        description: "Vélos de ville en libre service avec casques et antivols"
      },
      {
        id: 146,
        title: "Chaise haute",
        description: "Chaise haute évolutive avec harnais de sécurité"
      },
      {
        id: 147,
        title: "Poussette",
        description: "Poussette tout-terrain pliable avec ombrelle"
      },
      {
        id: 149,
        title: "Système d'alarme",
        description: "Système de sécurité avec télésurveillance 24h/24"
      }
    ]
  },
  {
    id: 86,
    title: "Fermette restaurée cadre bucolique",
    description: "Magnifique logement situé en Campagne, parfait pour un séjour de détente. Récemment rénové avec goût, il allie confort moderne et charme authentique. L'espace de vie lumineux et spacieux offre une atmosphère chaleureuse. La cuisine entièrement équipée permet de préparer vos repas en toute convenance.",
    fullAddress: "7, rue de Guyon\n27246 Imbert",
    address: "556, rue Édouard Mercier\n76395 Rodrigues",
    city: "Paul",
    zipcode: "95560",
    lattitude: "43.165641",
    longitude: "3.430343",
    maxClient: 4,
    dailyPrice: 70,
    imageCover: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
    images: [
      {
        id: 294,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 295,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 296,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 297,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 71,
        title: "Ménage inclus",
        description: "Service de ménage professionnel avant et après votre séjour"
      },
      {
        id: 72,
        title: "Linge de maison fourni",
        description: "Draps, serviettes et linge de toilette de qualité hôtelière"
      },
      {
        id: 73,
        title: "Accueil personnalisé",
        description: "Accueil sur place avec remise des clés et présentation du logement"
      },
      {
        id: 79,
        title: "Guide touristique",
        description: "Guide local privé pour visites personnalisées de la région"
      },
      {
        id: 86,
        title: "Laverie express",
        description: "Service de laverie avec récupération et livraison en 24h"
      },
      {
        id: 88,
        title: "Check-in tardif",
        description: "Possibilité d'arrivée tardive après 22h sans supplément"
      }
    ],
    equipments: [
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 124,
        title: "Réfrigérateur-congélateur",
        description: "Réfrigérateur américain avec distributeur d'eau fraîche"
      },
      {
        id: 129,
        title: "Fer à repasser",
        description: "Fer à repasser vapeur avec table à repasser pliante"
      },
      {
        id: 131,
        title: "Parking privé",
        description: "Place de parking sécurisée dans garage souterrain"
      },
      {
        id: 133,
        title: "Terrasse",
        description: "Grande terrasse privative avec salon de jardin et barbecue"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 142,
        title: "Vélos",
        description: "Vélos de ville en libre service avec casques et antivols"
      },
      {
        id: 143,
        title: "Kayaks",
        description: "Kayaks bi-places avec gilets de sauvetage (accès lac/rivière)"
      },
      {
        id: 148,
        title: "Coffre-fort",
        description: "Coffre-fort électronique pour objets de valeur"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  },
  {
    id: 87,
    title: "Studio design quartier historique",
    description: "Séjournez dans ce charmant logement en Zone touristique, conçu pour votre bien-être. Les pièces spacieuses et lumineuses offrent un cadre de vie agréable. La literie de qualité garantit des nuits reposantes. L'emplacement privilégié vous permet d'accéder facilement aux attractions locales.",
    fullAddress: "17, boulevard de Barthelemy\n70716 Lecomte",
    address: "66, boulevard Moulin\n40661 Tanguy-sur-Mer",
    city: "Herveboeuf",
    zipcode: "53815",
    lattitude: "44.505402",
    longitude: "-1.859434",
    maxClient: 1,
    dailyPrice: 50,
    imageCover: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    images: [
      {
        id: 298,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 299,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 300,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 301,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 76,
        title: "Courses livrées",
        description: "Service de courses avec livraison avant votre arrivée"
      },
      {
        id: 82,
        title: "Massages à domicile",
        description: "Masseur professionnel se déplace dans le logement"
      },
      {
        id: 85,
        title: "Promenade d'animaux",
        description: "Service de promenade et garde pour vos animaux domestiques"
      },
      {
        id: 86,
        title: "Laverie express",
        description: "Service de laverie avec récupération et livraison en 24h"
      }
    ],
    equipments: [
      {
        id: 117,
        title: "Climatisation",
        description: "Système de climatisation dans toutes les pièces principales"
      },
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 120,
        title: "Lave-vaisselle",
        description: "Lave-vaisselle intégré 12 couverts, programmes éco"
      },
      {
        id: 124,
        title: "Réfrigérateur-congélateur",
        description: "Réfrigérateur américain avec distributeur d'eau fraîche"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 130,
        title: "Sèche-cheveux",
        description: "Sèche-cheveux professionnel 2000W avec diffuseur"
      },
      {
        id: 132,
        title: "Balcon",
        description: "Balcon aménagé avec mobilier de jardin et vue panoramique"
      },
      {
        id: 135,
        title: "Piscine",
        description: "Piscine chauffée avec système de filtration automatique"
      },
      {
        id: 138,
        title: "Salle de sport",
        description: "Équipements de fitness : tapis de course, vélos, poids"
      },
      {
        id: 142,
        title: "Vélos",
        description: "Vélos de ville en libre service avec casques et antivols"
      },
      {
        id: 143,
        title: "Kayaks",
        description: "Kayaks bi-places avec gilets de sauvetage (accès lac/rivière)"
      },
      {
        id: 145,
        title: "Lit bébé",
        description: "Lit bébé aux normes avec matelas et linge de lit"
      },
      {
        id: 147,
        title: "Poussette",
        description: "Poussette tout-terrain pliable avec ombrelle"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  },
  {
    id: 88,
    title: "Résidence de vacances all-inclusive",
    description: "Découvrez ce superbe hébergement en Zone touristique, idéal pour explorer la région. Le logement dispose de tous les équipements nécessaires pour un séjour réussi. L'aménagement soigné et la décoration raffinée créent une ambiance unique. Profitez des espaces extérieurs pour vous détendre après vos visites.",
    fullAddress: "19, rue Guillou\n46948 Maryboeuf",
    address: "87, chemin Julie Ferrand\n65912 Bouchet",
    city: "Marty-les-Bains",
    zipcode: "02096",
    lattitude: "42.729405",
    longitude: "-2.757483",
    maxClient: 1,
    dailyPrice: 80,
    imageCover: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    images: [
      {
        id: 302,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
      },
      {
        id: 303,
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
      },
      {
        id: 304,
        imageUrl: "https://images.unsplash.com/photo-1551876245-8d1faa2cb3ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 305,
        imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop"
      }
    ],
    services: [
      {
        id: 78,
        title: "Location de voiture",
        description: "Véhicule de location disponible avec livraison sur place"
      },
      {
        id: 81,
        title: "Billetterie spectacles",
        description: "Réservation de places pour concerts, théâtres et événements"
      },
      {
        id: 89,
        title: "Stockage bagages",
        description: "Garde de bagages avant check-in ou après check-out"
      }
    ],
    equipments: [
      {
        id: 116,
        title: "WiFi haut débit",
        description: "Connexion internet très haut débit (fibre optique) disponible dans tout le logement"
      },
      {
        id: 118,
        title: "Chauffage central",
        description: "Chauffage au gaz avec thermostat programmable"
      },
      {
        id: 119,
        title: "Télévision écran plat",
        description: "Smart TV 55 pouces avec accès aux plateformes de streaming"
      },
      {
        id: 121,
        title: "Lave-linge",
        description: "Machine à laver 8kg avec programmes rapides et éco"
      },
      {
        id: 123,
        title: "Four micro-ondes",
        description: "Micro-ondes combiné grill 25L avec fonctions automatiques"
      },
      {
        id: 126,
        title: "Bouilloire électrique",
        description: "Bouilloire sans fil 1,7L avec arrêt automatique"
      },
      {
        id: 127,
        title: "Grille-pain",
        description: "Grille-pain 4 tranches avec réglage de brunissage"
      },
      {
        id: 130,
        title: "Sèche-cheveux",
        description: "Sèche-cheveux professionnel 2000W avec diffuseur"
      },
      {
        id: 134,
        title: "Jardin privatif",
        description: "Jardin clôturé avec pelouse et espace détente"
      },
      {
        id: 136,
        title: "Jacuzzi",
        description: "Spa 6 places avec jets de massage et éclairage LED"
      },
      {
        id: 138,
        title: "Salle de sport",
        description: "Équipements de fitness : tapis de course, vélos, poids"
      },
      {
        id: 141,
        title: "Console de jeux",
        description: "PlayStation 5 avec manettes et sélection de jeux"
      },
      {
        id: 145,
        title: "Lit bébé",
        description: "Lit bébé aux normes avec matelas et linge de lit"
      },
      {
        id: 150,
        title: "Interphone vidéo",
        description: "Portier vidéo connecté avec accès smartphone"
      }
    ]
  }
]


}
