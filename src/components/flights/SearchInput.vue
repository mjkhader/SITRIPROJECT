<!-- <template>
  <div class="relative flex justify-center bg-white shadow-lg p-4 rounded-lg">
    <div class="flex items-center gap-2 w-full md:w-3/5">
      <div class="relative flex-grow">
        <label class="block font-medium text-gray-700 text-sm"
          >From (Entity ID)</label
        >
        <div class="relative mt-1">
          <input
            v-model="fromEntityId"
            placeholder="Enter origin (e.g., NYCA)"
            class="block shadow-sm px-4 pl-10 border border-gray-300 focus:border-navy rounded-lg focus:outline-none focus:ring-2 focus:ring-navy w-full h-10 text-sm transition-all duration-200"
          />
          <span
            class="top-1/2 left-3 absolute text-gray-400 -translate-y-1/2 transform"
          >
            ✈️
          </span>
        </div>
      </div>

      <button
        @click="onSearch"
        class="flex justify-center items-center bg-teal-blue hover:bg-navy -mb-6 px-4 rounded-lg h-10 font-semibold text-white text-sm transition-all duration-200"
      >
        🔍 Search
      </button>

      <button
        @click="showModal = true"
        class="flex justify-center items-center bg-gray-300 hover:bg-gray-400 -mb-6 px-4 rounded-lg h-10 font-semibold text-navy text-sm transition-all duration-200"
      >
        ℹ️ Info
      </button>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div
        class="bg-white shadow-lg p-6 rounded-lg w-[90%] max-w-2xl h-[80vh] overflow-y-auto"
      >
        <h2 class="font-semibold text-navy text-lg text-center">Important Information</h2>

        <div class="mt-4">
          <table class="w-full border-collapse">
            <thead class="top-0 bg-pastel-blue">
              <tr class="rounded-lg">
                <th class="px-4 py-2 border border-gray-300 text-navy">Code</th>
                <th class="px-4 py-2 border border-gray-300 text-navy">Country</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in tableData" :key="index">
                <td class="px-4 py-2 border border-gray-300">{{ row.code }}</td>
                <td class="px-4 py-2 border border-gray-300">
                  {{ row.country }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-center mt-4">
          <button
            @click="showModal = false"
            class="bg-navy hover:bg-pastel-blue px-4 py-2 rounded-lg text-white hover:text-navy"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      fromEntityId: this.value,
      showModal: false, 
      tableData: [
        { code: "PR", country: "Puerto Rico" },
        { code: "CA", country: "Canada" },
        { code: "TT", country: "Trinidad and Tobago" },
        { code: "CO", country: "Colombia" },
        { code: "MX", country: "Mexico" },
        { code: "KR", country: "South Korea" },
        { code: "IS", country: "Iceland" },
        { code: "UK", country: "United Kingdom" },
        { code: "FR", country: "France" },
        { code: "CH", country: "Switzerland" },
        { code: "IT", country: "Italy" },
        { code: "ES", country: "Spain" },
        { code: "NO", country: "Norway" },
        { code: "SE", country: "Sweden" },
        { code: "AT", country: "Austria" },
        { code: "DE", country: "Germany" },
        { code: "RO", country: "Romania" },
        { code: "TR", country: "Türkiye (Turkey)" },
        { code: "EG", country: "Egypt" },
        { code: "GE", country: "Georgia" },
        { code: "JO", country: "Jordan" },
        { code: "SA", country: "Saudi Arabia" },
        { code: "AE", country: "United Arab Emirates" },
        { code: "IQ", country: "Iraq" },
        { code: "LB", country: "Lebanon" },
        { code: "QA", country: "Qatar" },
        { code: "TH", country: "Thailand" },
      ],
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.fromEntityId);
    },
  },
  watch: {
    value(newVal) {
      this.fromEntityId = newVal;
    },
  },
};
</script>
   -->




   
   <template>
  <div class="relative flex justify-center bg-white shadow-lg p-4 rounded-lg">
    <div class="flex items-center gap-2 w-full md:w-3/5">
      <div class="relative flex-grow">
        <label class="block font-medium text-gray-700 text-sm"
          >From (Entity ID)</label
        >
        <div class="relative mt-1">
          <input
            v-model="fromEntityId"
            @input="filterCities"
            @focus="showDropdown = true"
            @blur="hideDropdown"
            placeholder="Enter origin (e.g., AMM)"
            class="block shadow-sm px-4 pl-10 border border-gray-300 focus:border-navy rounded-lg focus:outline-none focus:ring-2 focus:ring-navy w-full h-10 text-sm transition-all duration-200"
          />
          <span
            class="top-1/2 left-3 absolute text-gray-400 -translate-y-1/2 transform"
          >
            ✈️
          </span>

          <ul
            v-if="showDropdown && filteredCities.length"
            class="z-10 absolute bg-white shadow-lg mt-1 border border-gray-300 rounded-lg w-full max-h-40 overflow-auto"
          >
            <li
              v-for="city in filteredCities"
              :key="city.code"
              @mousedown.prevent="selectCity(city)"
              class="hover:bg-gray-200 px-4 py-2 cursor-pointer"
            >
              {{ city.code }} ({{ city.country }})
            </li>
          </ul>
        </div>
      </div>

      <button
        @click="onSearch"
        class="flex justify-center items-center bg-teal-blue hover:bg-navy -mb-6 px-4 rounded-lg h-10 font-semibold text-white text-sm transition-all duration-200"
      >
        🔍 Search
      </button>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      fromEntityId: this.value,
      showDropdown: false,
      filteredCities: [],
      tableData: [
        { code: "AMM", country: "Amman" },
        { code: "DXB", country: "Dubai" },
        { code: "IST", country: "Istanbul" },
        { code: "CAI", country: "Cairo" },
        { code: "PAR", country: "Paris" },
        { code: "PR", country: "Puerto Rico" },
        { code: "CA", country: "Canada" },
        { code: "TT", country: "Trinidad and Tobago" },
        { code: "CO", country: "Colombia" },
        { code: "MX", country: "Mexico" },
        { code: "KR", country: "South Korea" },
        { code: "IS", country: "Iceland" },
        { code: "UK", country: "United Kingdom" },
        { code: "FR", country: "France" },
        { code: "CH", country: "Switzerland" },
        { code: "IT", country: "Italy" },
        { code: "ES", country: "Spain" },
        { code: "NO", country: "Norway" },
        { code: "SE", country: "Sweden" },
        { code: "AT", country: "Austria" },
        { code: "DE", country: "Germany" },
        { code: "RO", country: "Romania" },
        { code: "TR", country: "Türkiye (Turkey)" },
        { code: "EG", country: "Egypt" },
        { code: "GE", country: "Georgia" },
        { code: "JO", country: "Jordan" },
        { code: "SA", country: "Saudi Arabia" },
        { code: "AE", country: "United Arab Emirates" },
        { code: "IQ", country: "Iraq" },
        { code: "LB", country: "Lebanon" },
        { code: "QA", country: "Qatar" },
        { code: "TH", country: "Thailand" },
      ],
    };
  },
  methods: {
    filterCities() {
      if (!this.fromEntityId) {
        this.filteredCities = [];
        return;
      }
      const search = this.fromEntityId.toLowerCase();
      this.filteredCities = this.tableData.filter(
        (city) =>
          city.code.toLowerCase().includes(search) ||
          city.country.toLowerCase().includes(search)
      );
    },
    selectCity(city) {
      this.fromEntityId = city.code; 
      this.showDropdown = false;
      this.$emit("input", city.code); 
    },
    hideDropdown() {
      setTimeout(() => {
        this.showDropdown = false;
      }, 200);
    },
    onSearch() {
      this.$emit("search", this.fromEntityId);
    },
  },
  watch: {
    value(newVal) {
      this.fromEntityId = newVal;
    },
  },
};
</script>
  
