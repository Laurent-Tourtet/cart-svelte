// src/routes/api/checkout/+server.js
import dotenv from 'dotenv';
import Stripe from 'stripe';
import { json } from '@sveltejs/kit';

dotenv.config();


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
if (!process.env.STRIPE_SECRET_KEY) {
    console.error("La clé Stripe n'est pas définie dans les variables d'environnement !");
}

export async function POST({ request }) {
  try {
    const { items } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.name },
          unit_amount: item.price * 100, // Stripe attend un montant en cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: 'https://710f-31-35-198-173.ngrok-free.app/stripe/success', // Remplace par ton URL de succès
      cancel_url: 'https://710f-31-35-198-173.ngrok-free.app/stripe/cancel', // Remplace par ton URL d'annulation
    });

    return json({ id: session.id });
  } catch (error) {
    console.error(error);
    return json({ error: 'Échec de la création de la session de paiement.' }, { status: 500 });
  }
}
