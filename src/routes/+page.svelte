<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import sebsowter from '$lib/images/sebsowter.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="box box1">
    <div class="padding">
      <picture class="logo">
        <source srcset={sebsowter} type="image/webp" />
        <img class="logo" src={sebsowter} alt="Seb Sowter" />
      </picture>
      <h2>
        INTERACTIVE DEVELOPER<br />WEBSITES / WEBGL / WEB3 / BROWSER GAMES
      </h2>
    </div>
  </div>
  <div class="box">
    <h3>
      Seb Sowter
    </h3>
  </div>
  <div class="box">
    <h3>
      Seb Sowter
    </h3>
  </div>
  <div class="box">
    <h3>
      Seb Sowter
    </h3>
  </div>
  <div class="box">
    <h3>
      Seb Sowter
    </h3>
  </div>
  <div class="box">
    <div class="padding">
      <h3>
        GitHub
      </h3>
      <p>
        <a href="https://github.com/sebsowter" target="_blank">
          github.com/sebsowter
        </a>
      </p>
    </div>
  </div>
  <div class="box">
    <div class="padding">
      <h3>
        LinkedIn
      </h3>
      <p>
        <a href="https://github.com/sebsowter" target="_blank">
          github.com/sebsowter
        </a>
      </p>
    </div>
  </div>
  <div class="box">
    <div class="padding">
      <h3>
        Contact
      </h3>
      <p>
        <a href="https://github.com/sebsowter" target="_blank">
          github.com/sebsowter
        </a>
      </p>
    </div>
  </div>
</section>

<style>
	section {
    flex: 1;
		display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
      "a a a ."
      "a a a ."
      "a a a ."
      ". . . .";
    grid-gap: 1px;
	}

  h2 {
  }

  h3 {
  }

  .box {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
  }

  .padding {
    padding: 40px;
  }

  .box1 {
    grid-area: a;
  }

  .logo {
    max-width: 100%;
  }
</style>
