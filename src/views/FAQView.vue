<script setup>
import QAItem from '@/components/QAItem.vue'
import { useLanguage } from '@/composables/useLanguage'

const { language } = useLanguage()

const faqEN = [
  { question: "Is this coed?", answer: "Yep! We are inviting you and your partner! (We are only doing this once!)" },
  { question: "Can I bring my child?", answer: "As long as they are not coughing, sneezing, sniffling or sick in any way shape or form! As a reminder, it's a municipal building acquired to us via connections so we do need to be respectful of the space. We will also not have child activities planned." },
  { question: "Is there parking available?", answer: "There is a parking lot!" },
  { question: "Is there going to be a diaper raffle?", answer: "Yep! Bring any size packs of diapers to enter!" },
  { question: "Can I get you something off the registry?", answer: "Sure, we also accept money for daycare! Otherwise, please include a gift receipt because it's likely we already have the item or something similar." },
  { question: "Can I get you baby clothes?", answer: "No thanks!" },
  { question: "It's just allergies. I can still come, right?", answer: "We accept your presence and celebration from afar!" },
  { question: "I am not up-to-date on vaccines, can I still come?", answer: "As long as you are not currently/potentially sick. We'll also have masks available." },
  { question: "I was definitely sick 2 weeks ago but have a lingering cough but not contagious, probably...", answer: "If it's been over 10 days since you first got sick then come but wear a mask throughout the baby shower and keep some distance just in case. Otherwise, we accept your presence and celebration from afar!" },
  { question: "I can't attend anymore. Do I tell you?", answer: "Yep, giving us a heads-up would be nice! Thanks for the courtesy!" },
  { question: "I didn't RSVP, you are still anticipating that I'm showing up right?", answer: "You are? News to me." },
  { question: "Are you having a boy or a girl?", answer: "Come and find out." },
  { question: "What if I can't attend but still want to send a gift?", answer: "Oh thank you! You can get us something from our registry that will be delivered to our home." },
  { question: "Unrelated to the baby shower, but I have some stuff you might use for baby. How do I coordinate that with you?", answer: "Just text us! We'll let you know if we could use those items!" },
]

const faqES = [
  { question: "¿Es mixto (hombres y mujeres)?", answer: "¡Sí! ¡Estamos invitando a ti y a tu pareja! (¡Solo lo hacemos una vez!)" },
  { question: "¿Puedo traer a mi hijo/a?", answer: "¡Siempre y cuando no esté tosiendo, estornudando, con mocos o enfermo de ninguna manera! Como recordatorio, es un edificio municipal que conseguimos por contactos, así que debemos ser respetuosos con el espacio. Tampoco tendremos actividades planeadas para niños." },
  { question: "¿Hay estacionamiento disponible?", answer: "¡Sí, hay un estacionamiento!" },
  { question: "¿Va a haber una rifa de pañales?", answer: "¡Sí! ¡Trae paquetes de pañales de cualquier tamaño para participar!" },
  { question: "¿Puedo comprarte algo del registro?", answer: "¡Claro! También aceptamos dinero para la guardería. De lo contrario, por favor incluye el recibo de regalo porque es probable que ya tengamos el artículo o algo similar." },
  { question: "¿Puedo regalarte ropa de bebé?", answer: "¡No, gracias!" },
  { question: "Son solo alergias. ¿Puedo ir, verdad?", answer: "¡Aceptamos tu presencia y celebración desde lejos!" },
  { question: "No estoy al día con las vacunas, ¿puedo ir?", answer: "Siempre y cuando no estés actualmente/potencialmente enfermo. También tendremos mascarillas disponibles." },
  { question: "Definitivamente estuve enfermo hace 2 semanas pero tengo una tos persistente pero no contagiosa, probablemente...", answer: "Si han pasado más de 10 días desde que te enfermaste, ven pero usa mascarilla durante todo el baby shower y mantén algo de distancia por si acaso. De lo contrario, ¡aceptamos tu presencia y celebración desde lejos!" },
  { question: "Ya no puedo asistir. ¿Te aviso?", answer: "¡Sí, sería bueno que nos avises! ¡Gracias por la cortesía!" },
  { question: "No confirmé asistencia, ¿sigues esperando que llegue, verdad?", answer: "¿Vas a venir? No sabía." },
  { question: "¿Van a tener niño o niña?", answer: "Ven y descúbrelo." },
  { question: "¿Qué pasa si no puedo asistir pero quiero enviar un regalo?", answer: "¡Oh, gracias! Puedes comprarnos algo de nuestro registro que será enviado a nuestra casa." },
  { question: "No relacionado con el baby shower, pero tengo algunas cosas que podrían usar para el bebé. ¿Cómo coordino eso con ustedes?", answer: "¡Solo envíanos un mensaje! ¡Te diremos si podemos usar esos artículos!" },
]
</script>

<template>
  <div class="faq space-y-12">
    <template v-if="language === 'en'">
      <QAItem
        v-for="(item, index) in faqEN"
        :key="index"
        :question="item.question"
        :answer="item.answer"
      />
    </template>
    <template v-else>
      <QAItem
        v-for="(item, index) in faqES"
        :key="index"
        :question="item.question"
        :answer="item.answer"
      />
    </template>
  </div>
</template>
