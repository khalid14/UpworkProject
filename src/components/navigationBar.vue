<template>
    <v-toolbar flat class="grey darken-1 second-level-nav" height="32">
        <v-toolbar-items>
            <v-menu v-for="(tabs,index) in tabsNav" :key="index" transition="slide-x-transition" offset-y>
                <v-btn :to="getUrl" slot="activator" dark flat class="text-capitalize">
                    {{tabs.parentName}} <v-icon class="ml-1">keyboard_arrow_down</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="(tabsChild, childIndex) in tabs.children" :key="childIndex" @click="assignUrl(tabsChild.link)" :to="tabsChild.link">
                        <v-list-tile-title>
                            {{ tabsChild.name }}
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <!--<v-btn flat depressed  dark v-for="(navItem,index) in navItems" :key="index" class="text-capitalize">-->
                <!--{{navItem.itemText}}-->
            <!--</v-btn>-->
        </v-toolbar-items>
    </v-toolbar>
</template>

<style lang="scss" scoped>
    @import "../assets/variable";
    .second-level-nav  .v-btn{
        font-size: 13px;
        &:hover{
            background-color: $primary-color;
        }
    }

</style>

<script>

    import tabsNavigation from '../config/tabs';

    export default {
        data(){
            return{
                getUrl:'/',
                tabsNav: tabsNavigation.topTabsNavigation,
                navItems:[
                    {
                        itemText:'Tab 2',
                        icon:'contacts',
                        url:'/'
                    },
                    {
                        itemText:'Tab 3',
                        icon:'contacts',
                        url:'/'
                    },
                    {
                        itemText:'Tab 4',
                        icon:'contacts',
                        url:'/'
                    },
                    {
                        itemText:'Tab 5',
                        icon:'contacts',
                        url:'/'
                    },
                    {
                        itemText:'Tab 6',
                        icon:'contacts',
                        url:'/'
                    }
                ],
                MegaItems:[
                    {
                        itemText:'Tab 1.1',
                        icon:'contacts',
                        url:'/innerTab1.1'
                    },
                    {
                        itemText:'Tab 1.2',
                        icon:'contacts',
                        url:'/innerTab1.2'
                    },
                    {
                        itemText:'Tab 1.3',
                        icon:'contacts',
                        url:'/innerTab1.3'
                    },
                    {
                        itemText:'Tab 1.4',
                        icon:'contacts',
                        url:'/innerTab1.4'
                    },
                    {
                        itemText:'Tab 1.5',
                        icon:'contacts',
                        url:'/innerTab1.5'
                    },
                    {
                        itemText:'Tab 1.6',
                        icon:'contacts',
                        url:'/innerTab1.6'
                    },
                    {
                        itemText:'Tab 1.7',
                        icon:'contacts',
                        url:'/innerTab1.7'
                    },
                    {
                        itemText:'Tab 1.8',
                        icon:'contacts',
                        url:'/innerTab1.8'
                    },
                    {
                        itemText:'Tab 1.9',
                        icon:'contacts',
                        url:'/innerTab1.9'
                    }
                ]
            }
        },
        mounted: function(){

        },
        methods:{
            assignUrl: function (url) {

                this.getUrl = url;
            }
        }
    }
</script>