// src/routes/api/webhook/+server.js
import Stripe from 'stripe';
// import { json } from '@sveltejs/kit';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Clé secrète du webhook Stripe pour vérifier la source de l'événement
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST({ request }) {
  const sig = request.headers.get('stripe-signature');

  let event;

  try {
    // Vérification de l'authenticité de l'événement Stripe
    const rawBody = await request.text(); // Stripe exige un body brut pour la vérification
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error('⚠️  Webhook signature verification failed.', err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Gestion de l'événement reçu
  switch (event.type) {
    case 'checkout.session.completed': {
      const checkoutSessionCompleted = event.data.object;
      console.log('Session de paiement complétée:', checkoutSessionCompleted);
      // Définir et appeler une fonction pour traiter checkout.session.completed
      break;
    }
    // Ajouter d'autres types d'événements à gérer si nécessaire
    default:
      console.log(`Événement non géré : ${event.type}`);
  }

  // Répondre avec un statut 200 pour accuser réception
  return new Response(null, { status: 200 });
}
