<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link 
        class="nav-link" 
        :class="{ active: $route.path === '/' }" 
        to="/">
        <img style="margin-left: 10px;" src="/home.png">
        Home
      </router-link>
    </li>
    <li class="nav-item">
      <router-link 
        class="nav-link" 
        :class="{ active: $route.path === '/persons' }" 
        to="/persons">
        <img style="margin-left: 10px;" src="/user.png">
        Persons
      </router-link>
    </li>
    <li class="nav-item">
      <router-link 
        class="nav-link" 
        :class="{ active: $route.path === '/drivers' }" 
        to="/drivers">
        <img style="margin-left: 10px;" src="/driver.png">
        Drivers
      </router-link>
    </li>
    <li class="nav-item">
      <router-link 
        class="nav-link" 
        :class="{ active: $route.path === '/cars' }" 
        to="/cars">
        <img style="margin-left: 10px;" src="/car.png">
        Cars
      </router-link>
    </li>
  </ul>

  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>