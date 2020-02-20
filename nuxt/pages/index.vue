<template>
  <div class="container">
    <div>
      <h1>Mon article d'accroche</h1>
      <p class="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ullamcorper eros at augue luctus, sit amet vulputate odio molestie.
        Mauris quis orci id risus laoreet facilisis. Fusce imperdiet tellus eget
        ex mollis porta. Aliquam vel mauris non libero aliquet viverra. Aliquam
        vulputate faucibus aliquet. Cras bibendum magna imperdiet, volutpat nibh
        in, euismod mauris. Duis lacinia diam elit, vel tempor est consequat
        non. Curabitur diam dolor, tincidunt a fringilla et, condimentum id
        arcu.
      </p>

      <p class="text-justify">
        Aliquam posuere vel tortor sed semper. Praesent dui neque, auctor nec
        viverra eu, interdum cursus turpis. Sed augue enim, faucibus vitae
        posuere a, faucibus sed turpis. Nullam turpis sapien, egestas ultricies
        imperdiet pellentesque, volutpat eget massa. In venenatis accumsan
        efficitur. Duis pulvinar, eros vitae lobortis ultricies, nunc mi
        condimentum libero, et feugiat leo mauris non ex. Curabitur condimentum
        gravida mi. Fusce vitae neque lorem. Sed sit amet aliquet purus, vel
        lobortis massa. Suspendisse volutpat eleifend sapien tincidunt
        venenatis. Donec vestibulum mollis egestas.
      </p>

      <p class="text-justify">
        Ut sodales dolor non viverra rhoncus. Nunc luctus odio vel metus
        vulputate lobortis. Phasellus ut diam ultrices, cursus arcu vitae,
        elementum velit. Nulla a neque sed odio imperdiet pharetra et quis
        neque. Pellentesque molestie turpis vitae purus bibendum, non accumsan
        neque mattis. Donec eget lectus ut velit consectetur tempus vitae vitae
        massa. Vivamus neque nunc, vehicula sit amet nibh quis, bibendum ornare
        enim. Aliquam libero nisi, aliquet at dui eget, convallis placerat
        lectus. Nulla ac varius dolor, non ornare mauris. Praesent fermentum,
        urna eget sodales pharetra, lacus orci consequat ante, laoreet rutrum
        libero mi tempus ex. Quisque hendrerit nec elit id imperdiet. In dui
        sem, tempus nec fringilla a, fringilla vel tellus. Proin efficitur nec
        sem eget suscipit.
      </p>

      <p class="text-justify">
        Pellentesque porta nec augue non placerat. Etiam dignissim lectus vel mi
        tristique, in mollis dolor ullamcorper. Sed sed diam sit amet augue
        vulputate tincidunt. Vestibulum consectetur ante eu fermentum interdum.
        Donec id hendrerit ex. Proin ac est est. Etiam vitae ligula magna. Etiam
        est ipsum, mattis a nisi ut, rutrum fringilla sem. Aenean arcu risus,
        consequat a ipsum a, commodo luctus turpis. Suspendisse ornare rhoncus
        consectetur. Duis malesuada orci eleifend, porttitor sem et, iaculis
        urna. Mauris venenatis, metus in semper accumsan, enim turpis dignissim
        sapien, vel aliquam magna nisi non felis. Aliquam dapibus non mauris
        quis finibus. Nullam scelerisque pharetra tincidunt.
      </p>

      <p class="text-justify">FIN</p>

      <hr>

    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // let data  = await $axios.$get('/hello')

    return { msg: 'Hello' }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
