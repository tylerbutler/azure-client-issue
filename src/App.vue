<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { AzureClient } from '@fluidframework/azure-client'
import { SampleTokenProvider } from './SampleTokenProvider'
import { SharedMap } from 'fluid-framework'

const fluidRelayClient = new AzureClient({ connection: { orderer: '', storage: '',tenantId: '', tokenProvider: new SampleTokenProvider({ userId: 'test'})  }})
const fluidConnection = await fluidRelayClient.createContainer({ initialObjects: { props: SharedMap, objects: SharedMap } })
const id = await fluidConnection.container.attach()

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
