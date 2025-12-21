<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { language } = useLanguage()
</script>

<template>
  <div class="registry">
    <!-- English Section -->
    <section v-if="language === 'en'" class="space-y-5">
      <h1 class="accent text-3xl/9">Baby Registries</h1>
      <p class="pl-1 leading-relaxed">
        We've created registries at a few places to help make finding the perfect gift for our little one easy and joyful.
      </p>
      <p class="pl-1 leading-relaxed">
        If you decide to gift something outside of the registry, we kindly ask that you include a gift receipt. We've been incredibly lucky to receive many pre-loved items in great condition from friends, so we may already have something similar.
      </p>
      <p class="pl-1 leading-relaxed">
        If you prefer, we're more than happy to accept monetary gifts to help with daycare. We truly appreciate your generosity.
      </p>
      <p class="pl-1 leading-relaxed">
        And no clothes, please — we're all set! Thanks!
      </p>
      <ul class="pl-1 space-y-3 mt-4 list-disc list-inside">
        <li>
          <a href="https://www.amazon.com/baby-reg/loren-velasquez-hector-rios-march-2026-chicago/3BJD6C5Q07VHW?ref_=cm_sw_r_cp_ud_dp_9BNE5NW5YZG736CT792R" target="_blank" rel="noopener" class="hover:text-slate-900 font-medium hover:underline">
            Amazon Baby Registry →
          </a>
        </li>
        <li>
          <a href="[BABYLIST REGISTRY LINK]" target="_blank" rel="noopener" class="hover:text-slate-900 font-medium hover:underline">
            Babylist Registry →
          </a>
        </li>
      </ul>
    </section>

    <!-- Spanish Section -->
    <section v-else class="space-y-5">
      <h1 class="accent text-3xl/9">Registros de Bebé</h1>
      <p class="pl-1 leading-relaxed">
        Hemos creado listas de regalos en algunos lugares para que encontrar el regalo perfecto para bebé sea fácil y especial.
      </p>
      <p class="pl-1 leading-relaxed">
        Si deciden regalarnos algo fuera de la lista, por favor incluyan el recibo de regalo. Es posible que ya tengamos ese artículo (o algo similar), ya que muchos amigos han sido muy generosos y nos han regalado artículos pre-amados y en excelente estado.
      </p>
      <p class="pl-1 leading-relaxed">
        Si lo prefieren, con mucho gusto aceptamos aportes en dinero para ayudarnos con la guardería. Agradecemos enormemente su generosidad.
      </p>
      <p class="pl-1 leading-relaxed">
        Y por favor, nada de ropa — ¡ya tenemos suficiente, muchas gracias!
      </p>
      <ul class="pl-1 space-y-3 mt-4 list-disc list-inside">
        <li>
          <a href="https://www.amazon.com/baby-reg/loren-velasquez-hector-rios-march-2026-chicago/3BJD6C5Q07VHW?ref_=cm_sw_r_cp_ud_dp_9BNE5NW5YZG736CT792R" target="_blank" rel="noopener" class="hover:text-slate-900 font-medium hover:underline">
            Amazon Baby Registry →
          </a>
        </li>
        <li>
          <a href="[BABYLIST REGISTRY LINK]" target="_blank" rel="noopener" class="hover:text-slate-900 font-medium hover:underline">
            Babylist Registry →
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
