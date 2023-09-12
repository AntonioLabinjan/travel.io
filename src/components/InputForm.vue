<template>
  <div>
    <h2>Unos podataka o putovanju</h2>
    <form @submit.prevent="calculateCost">
      <label for="distance">Udaljenost (km):</label>
      <input type="number" v-model="distance" required>
      <label for="kmPerLiter">Kilometara po litri (km per l):</label>
      <input type="number" v-model="kmPerLiter" required>
      <label for="euroPerLiter">Eura po litri (E per l):</label>
      <input type="number" v-model="euroPerLiter" step="0.01" required>
      <!-- Dodajte ostale ulazne polja za potrošnju goriva, cijenu goriva itd. -->

      <button type="submit">Izračunaj troškove</button>
    </form>
    <div v-if="totalExpenses">
      <h3>Ukupni troškovi za gorivo:</h3>
      <p>{{ totalExpenses }} eura</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      distance: null,
      kmPerLiter: null,
      euroPerLiter: null,
      totalExpenses: null,
    };
  },
  methods: {
  calculateCost() {
    if (this.distance && this.kmPerLiter && this.euroPerLiter) {
      const totalExpenses = (this.distance / this.kmPerLiter) * parseFloat(this.euroPerLiter);
      this.totalExpenses = totalExpenses.toFixed(2); // Formatiramo rezultat na dvije decimalne znamenke
    } else {
      this.totalExpenses = null; // Postavljamo na null ako ne postoje svi potrebni podaci
    }
  },
},

};
</script>
