<script setup>
import QAItem from '@/components/QAItem.vue'
import { useLanguage } from '@/composables/useLanguage'

const { language } = useLanguage()

const faqEN = [
  { question: "Are you having a boy or a girl?", answer: "Come and find out!" },
  { question: "Is this coed?", answer: "Yep! We're inviting you and your partner — we're keeping it simple with just one celebration!" },
  { question: "Can I bring my child?", answer: "Absolutely, as long as they're feeling healthy! Just a heads up — we won't have kid-specific activities, so you might want to bring something to keep them entertained. Thanks for understanding!" },
  { question: "Is there parking available?", answer: "There is a parking lot!" },
  { question: "Is there going to be a diaper raffle?", answer: "Yep! Bring any size packs of diapers to enter!" },
  { question: "Can I get you baby clothes?", answer: "We're actually all set on clothes — we've been so lucky to receive hand-me-downs from friends and family! But thank you for thinking of us!" },
  { question: "It's just allergies. I can still come, right?", answer: "We totally get it — allergies are the worst! Since it can be tricky to tell allergies apart from early cold symptoms, we'd really appreciate if you could sit this one out just to be safe. We'll miss you, but thank you so much for understanding!" },
  { question: "I am not up-to-date on vaccines, can I still come?", answer: "Of course! As long as you're feeling healthy, you're welcome to join us. We'll also have masks available if you'd like one." },
  { question: "I was definitely sick 2 weeks ago but have a lingering cough but not contagious, probably...", answer: "If it's been over 10 days since you first got sick, you're welcome to come — just wear a mask and keep a little distance just in case. If it's been less than 10 days, we'd love for you to celebrate with us from home. We'll miss you!" },
  { question: "I can't attend anymore. Do I tell you?", answer: "Yep, giving us a heads-up would be nice! Thanks for the courtesy!" },
  { question: "I didn't RSVP, you are still anticipating that I'm showing up right?", answer: "It happens! Just shoot us a text as soon as you know — ideally a week out so we can plan accordingly. Day-of surprises are tough to swing, but we'll do our best!" },
  { question: "What if I can't attend but still want to send a gift?", answer: "Oh thank you! You can get us something from our registry that will be delivered to our home." },
  { question: "Unrelated to the baby shower, but I have some stuff you might use for baby. How do I coordinate that with you?", answer: "We'd love to hear what you have — just text us to coordinate!" },
]

const faqES = [
  { question: "¿Van a tener niño o niña?", answer: "Ven y descúbre!" },
  { question: "¿Es mixto (hombres y mujeres)?", answer: "¡Sí! Estamos invitando a ti y a tu pareja — ¡lo estamos haciendo sencillo con una sola celebración!" },
  { question: "¿Puedo traer a mi hijo/a?", answer: "¡Claro, siempre y cuando esté sanito! Solo ten en cuenta que no tendremos actividades para niños, así que quizás quieras traer algo para entretenerlo. ¡Gracias por entender!" },
  { question: "¿Hay estacionamiento disponible?", answer: "¡Sí, hay un estacionamiento!" },
  { question: "¿Va a haber una rifa de pañales?", answer: "¡Sí! ¡Trae paquetes de pañales de cualquier tamaño para participar!" },
  { question: "¿Puedo regalarte ropa de bebé?", answer: "¡Ya tenemos bastante ropa! Hemos tenido mucha suerte de recibir ropa de amigos y familiares. ¡Pero gracias por pensar en nosotros!" },
  { question: "Son solo alergias. ¿Puedo ir, verdad?", answer: "¡Lo entendemos, las alergias son lo peor! Como es difícil distinguir entre alergias y los primeros síntomas de un resfriado, te agradeceríamos mucho si pudieras quedarte en casa solo por precaución. ¡Te vamos a extrañar, pero muchas gracias por entender!" },
  { question: "No estoy al día con las vacunas, ¿puedo ir?", answer: "¡Claro que sí! Mientras te sientas bien de salud, eres bienvenido/a. También tendremos mascarillas disponibles por si quieres una." },
  { question: "Definitivamente estuve enfermo hace 2 semanas pero tengo una tos persistente pero no contagiosa, probablemente...", answer: "Si han pasado más de 10 días desde que te enfermaste, eres bienvenido/a — solo usa mascarilla y mantén un poco de distancia por si acaso. Si han pasado menos de 10 días, nos encantaría que celebraras con nosotros desde casa. ¡Te vamos a extrañar!" },
  { question: "Ya no puedo asistir. ¿Te aviso?", answer: "¡Sí, sería bueno que nos avises! ¡Gracias por la cortesía!" },
  { question: "No confirmé asistencia, ¿sigues esperando que llegue, verdad?", answer: "¡Pasa! Solo mándanos un mensaje en cuanto sepas — idealmente con una semana de anticipación para poder planear. Las sorpresas del mismo día son difíciles, ¡pero haremos lo posible!" },
  { question: "¿Qué pasa si no puedo asistir pero quiero enviar un regalo?", answer: "¡Oh, gracias! Puedes comprarnos algo de nuestro registro que será enviado a nuestra casa." },
  { question: "No relacionado con el baby shower, pero tengo algunas cosas que podrían usar para el bebé. ¿Cómo coordino eso con ustedes?", answer: "¡Nos encantaría saber qué tienes! Solo mándanos un mensaje para coordinar." },
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
