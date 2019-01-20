<template>
    <div>
        <v-toolbar id="top-level-nav" light class="white text--primary" flat>
            <v-toolbar-side-icon color="primary"></v-toolbar-side-icon>
            <v-toolbar-title class="primary--text">Logo</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat color="primary">Link One</v-btn>
                <v-btn flat color="primary">Link Two</v-btn>
                <v-btn flat color="primary">Link Three</v-btn>
                <v-btn flat icon color="primary">
                    <v-icon>search</v-icon>
                </v-btn>
                <v-menu offset-y>
                    <v-btn
                            slot="activator"
                            flat
                            depressed
                            color="primary"
                    >
                        <v-avatar color="primary" class="mr-2">
                            <v-icon light class="white--text">account_circle</v-icon>
                        </v-avatar>
                        <span>Admin Name</span>
                        <i class="material-icons">
                            arrow_drop_down
                        </i>
                    </v-btn>
                    <v-list>
                        <v-list-tile @click="" color="primary">
                            <v-list-tile-title>
                                <v-icon class="mr-4 primary--text">settings</v-icon>Account
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="" color="primary">
                            <v-list-tile-title>
                                <v-icon class="mr-4 primary--text">settings</v-icon>Profile
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="" color="primary">
                            <v-list-tile-title>
                                <v-icon class="mr-4 primary--text">settings</v-icon>Logout
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>

        </v-toolbar>
        <nav-bar></nav-bar>
    </div>
</template>


<style lang="scss">
    @import "../assets/variable";

    #top-level-nav{
        .primary {
            background-color: $primary-color !important;
            border-color: $primary-color !important;
        }
        .primary--text{
            color:$primary-color !important;
        }
    }
</style>


<script>

    import NavBar from './navigationBar'

    export default {

        components: {
            NavBar
        },

    }
</script>