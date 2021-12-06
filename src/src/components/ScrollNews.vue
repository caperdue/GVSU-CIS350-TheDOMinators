<template>
    <v-virtual-scroll
      :items="news"
      :item-height="50"
      height="300"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar
              size="56"
              class="white--text"
            >
              <v-img :src="item.image_url"></v-img>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              depressed
              small
              :href="item.news_url"
              target="_blank"
            >
              

              <v-icon
                color="orange darken-4"
                right
              >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
</template>

<script>
export default {
    props:["news"],
    name: "scrollNew"

}
</script>

<style>

</style>