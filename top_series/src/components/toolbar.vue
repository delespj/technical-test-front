<template>
    <nav class="toolbar">
        <v-app-bar flat app >
            <v-app-bar-nav-icon class="grey--text" @click="drawer= !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-thin">
                    Manuel
                </span>
                <span>
                    Konrath
                </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!--drop down -->
            <div class="text-center">
                <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn color="grey" text v-on="on">
                    <v-icon left>expand_more</v-icon>
                    <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" @click="on" router :to="link.route">
                        <v-list-item-title class="primary--text">
                            <v-icon class="primary--text">{{ link.icon }}</v-icon>
                            {{ link.text }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app height="100%" class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="@/assets/manuel_konrath.jpg" alt="avatar">
                    </v-avatar>
                    <p class="white--text subheading mt-1">Manuel Konrath</p>
                </v-flex>
            </v-layout>

            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      test: true,
      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' },
        { icon: 'mdi-filmstrip', text: 'Liste of séries (Bonus)', route: '/series' },
        { icon: 'mdi-rocket', text: 'Top series', route: '/ranking_1-to-5' },
        { icon: 'mdi-film', text: 'Other series', route: '/ranking_6-to-10' }
      ],
    }
  }
}
</script>
