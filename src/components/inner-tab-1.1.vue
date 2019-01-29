<template>
    <div id="inner-single-page">
        <v-layout row wrap>
            <v-flex sm3>
                <v-navigation-drawer dark class="primary inner-left-nav">
                    <v-list dense>
                        <template v-for="item in items">
                            <v-layout
                                    row
                                    v-if="item.heading"
                                    align-center
                                    :key="item.heading"
                            >
                                <v-flex xs6>
                                    <v-subheader v-if="item.heading">
                                        {{ item.heading }}
                                    </v-subheader>
                                </v-flex>
                                <v-flex xs6 class="text-xs-center">
                                    <a href="#!" class="body-2 black--text">EDIT</a>
                                </v-flex>
                            </v-layout>
                            <v-list-group
                                    v-else-if="item.children"
                                    v-model="item.model"
                                    :key="item.text"
                                    :prepend-icon="item.model ? item.icon : item['icon-alt']"
                                    append-icon=""
                                    class="yes-child"
                            >
                                <v-list-tile slot="activator">
                                    <v-list-tile-content>
                                        <v-list-tile-title>
                                            {{ item.text }}
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile
                                        v-for="(child, i) in item.children"
                                        :key="i"
                                        @click=""
                                >
                                    <v-list-tile-action v-if="child.icon">
                                        <v-icon>{{ child.icon }}</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>
                                            {{ child.text }}
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list-group>
                            <v-list-tile v-else @click="" :key="item.text">
                                <v-list-tile-action>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{ item.text }}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-navigation-drawer>
            </v-flex>
            <v-flex sm8>
                <v-container>
                    <v-layout row wrap class="mt-5">
                        <v-flex xs12>
                            <h1 class="headline mb-4 text-xs-center">Add your new device</h1>
                        </v-flex>
                        <v-flex xs12>
                            <v-tabs height="60" grow centered color="grey lighten-1" dark icons-and-text class="device-tabs">
                                <v-tabs-slider color="primary"></v-tabs-slider>
                                <v-tab href="#tab-1" class="text-capitalize">
                                    <v-icon class="mb-0 mr-3">recent_actors</v-icon>
                                    General Information
                                </v-tab>

                                <v-tab href="#tab-2" class="text-capitalize" v-model="getValue" @click="show">
                                    <v-icon class="mb-0 mr-3">lock_open</v-icon>
                                    Credentials
                                </v-tab>

                                <v-tab href="#tab-3" class="text-capitalize">
                                    <v-icon class="mb-0 mr-3">settings</v-icon>
                                    TRAFip
                                </v-tab>

                                <v-tab-item value="tab-1">
                                    <v-card class="single-inner-tab px-3 pt-4 pb-0">
                                        <v-card-text class="pa-0">
                                            <v-layout row wrap>
                                                <v-flex md6 px-2 mb-5>
                                                    <v-label>Name<sup class="font-weight-bold red--text">*</sup></v-label>
                                                        <v-text-field
                                                                hide-details
                                                                flat
                                                                solo
                                                                placehloder="Enter Name"
                                                        ></v-text-field>
                                                </v-flex>
                                                <v-flex md6 px-2 mb-5>
                                                    <v-label>Description</v-label>
                                                    <v-text-field
                                                            hide-details
                                                            flat
                                                            solo
                                                            placehloder="Enter Description"
                                                    ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout row wrap>
                                                <v-flex md4 px-2 mb-5>
                                                    <v-label>Management IP address<sup class="font-weight-bold red--text">*</sup></v-label>
                                                    <v-text-field
                                                            hide-details
                                                            flat
                                                            solo
                                                            placehloder="Enter IP"
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex md4 px-2 mb-5>
                                                    <v-label>Type</v-label>
                                                    <v-text-field
                                                            hide-details
                                                            flat
                                                            solo
                                                            placehloder="Enter Type"
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex md4 px-2 mb-5>
                                                    <v-label>Manufacturer</v-label>
                                                    <v-text-field
                                                            hide-details
                                                            flat
                                                            solo
                                                            placehloder="Enter Manufacturer"
                                                    ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout row wrap>
                                                <v-flex md6 px-2 mb-4>
                                                    <v-label>Longitude</v-label>
                                                    <v-text-field
                                                            hide-details
                                                            flat
                                                            solo
                                                            placehloder="Enter Longitude"
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex md6 px-2 mb-4>
                                                    <v-label>Latitude</v-label>
                                                    <v-text-field
                                                            hide-details
                                                            flat
                                                            solo
                                                            placehloder="Enter Latitude"
                                                    ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-2">
                                    <v-card class="single-inner-tab px-3 pt-4 pb-0">
                                        <v-card-text class="pa-0">
                                            <v-layout row wrap>
                                                <v-flex sm6>
                                                    <v-layout row wrap>
                                                        <v-flex md6 px-2 mb-5>
                                                            <v-label>SNP Credentials</v-label>
                                                            <v-select
                                                                    :items="snpItems"
                                                                    hide-details
                                                                    flat
                                                                    solo
                                                                    placehloder="Select SNP"
                                                            ></v-select>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-layout row wrap>
                                                        <v-flex md6 px-2 mb-5>
                                                            <v-label>SNMP Version</v-label>
                                                            <v-select
                                                                    :items="snmpItems"
                                                                    hide-details
                                                                    flat
                                                                    solo
                                                                    placehloder="Select Version"
                                                            ></v-select>
                                                        </v-flex>
                                                        <v-flex md6 px-2 mb-5>
                                                            <v-label>SNMP Community<sup class="font-weight-bold red--text">*</sup></v-label>
                                                            <v-text-field
                                                                    hide-details
                                                                    flat
                                                                    solo
                                                                    placehloder="Enter Community"
                                                            ></v-text-field>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-layout row wrap>
                                                        <v-flex md12 px-2 mb-5 class="radio-selection">
                                                            <v-label>Use default SNMP configuration</v-label>
                                                            <v-radio-group v-model="row" row>
                                                                <v-radio color="primary" label="Yes" value="radio-1"></v-radio>
                                                                <v-radio color="primary" label="No" value="radio-2"></v-radio>
                                                            </v-radio-group>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-layout row wrap>
                                                        <v-flex md4 px-2 d-flex align-center>
                                                            <v-label>SNMP Agents</v-label>
                                                        </v-flex>
                                                        <v-flex md3 px-2>
                                                            <v-btn class="primary" flat small>Add</v-btn>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex sm6>
                                                    <v-layout row wrap>
                                                        <v-flex md12 px-2 mb-5>
                                                            <v-label>Connection Credentials</v-label>
                                                            <v-select
                                                                    :items="connCredentials"
                                                                    hide-details
                                                                    flat
                                                                    solo
                                                                    placehloder="Select Credentials"
                                                            ></v-select>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-layout row wrap>
                                                        <v-flex md6 px-2 mb-5>
                                                            <v-label>Connection Protocol</v-label>
                                                            <v-select
                                                                    :items="connProtocol"
                                                                    hide-details
                                                                    flat
                                                                    solo
                                                                    placehloder="Select Protocol"
                                                            ></v-select>
                                                        </v-flex>
                                                        <v-flex md6 px-2 mb-5>
                                                            <v-label>Authentication Script</v-label>
                                                            <v-select
                                                                    :items="authScript"
                                                                    hide-details
                                                                    flat
                                                                    solo
                                                                    placehloder="Select Script"
                                                            ></v-select>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-layout row wrap>
                                                        <v-flex md6 px-2 mb-5>
                                                            <v-label>Telnet Port<sup class="font-weight-bold red--text">*</sup></v-label>
                                                            <v-text-field
                                                                    hide-details
                                                                    flat
                                                                    solo
                                                                    placehloder="Enter Port"
                                                            ></v-text-field>
                                                        </v-flex>
                                                        <v-flex md6 px-2 mb-5>
                                                            <v-label>User</v-label>
                                                            <v-text-field
                                                                    hide-details
                                                                    flat
                                                                    solo
                                                                    placehloder="Enter User"
                                                            ></v-text-field>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-layout row wrap>
                                                        <v-flex md6 px-2>
                                                            <v-label>User Password</v-label>
                                                            <v-text-field
                                                                    :append-icon="show3 ? 'visibility_off' : 'visibility'"
                                                                    :type="show3 ? 'text' : 'password'"
                                                                    value=""
                                                                    @click:append="show3 = !show3"
                                                                    placeholder="Enter Password"
                                                                    solo
                                                                    flat
                                                                    hide-detials
                                                            ></v-text-field>
                                                        </v-flex>
                                                        <v-flex md6 px-2>
                                                            <v-label>Enable Secret</v-label>
                                                            <v-text-field
                                                                    hide-details
                                                                    flat
                                                                    solo
                                                                    placehloder="Enter Secret"
                                                            ></v-text-field>
                                                        </v-flex>
                                                    </v-layout>

                                                </v-flex>
                                            </v-layout>
                                        </v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-3">
                                    <v-card class="single-inner-tab px-3 pt-4 pb-0">
                                        <v-card-text class="pa-0">
                                            <v-layout row wrap>
                                                <v-flex md3 px-2 mb-4 class="radio-selection">
                                                    <v-label>Enable TRAFip collect</v-label>
                                                    <v-radio-group v-model="row1" row>
                                                        <v-radio color="primary" label="Yes" value="radio-1"></v-radio>
                                                        <v-radio color="primary" label="No" value="radio-2"></v-radio>
                                                    </v-radio-group>
                                                </v-flex>
                                                <v-flex md6 px-2 mb-4>
                                                    <v-label>Netflow exporter ip address<sup class="font-weight-bold red--text">*</sup></v-label>
                                                    <v-text-field
                                                            hide-details
                                                            flat
                                                            solo
                                                            placehloder="Enter IP"
                                                            append-outer-icon="search"
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex md3 px-2 mb-4>
                                                    <v-label>Sampling Rate Configuration</v-label>
                                                    <v-select
                                                            :items="sampleRate"
                                                            hide-details
                                                            flat
                                                            solo
                                                            placehloder="Select Rate"
                                                    ></v-select>
                                                </v-flex>
                                            </v-layout>
                                        </v-card-text>
                                    </v-card>
                                </v-tab-item>
                            </v-tabs>
                            <!--<div class="text-xs-center mt-3">-->
                                <!--<v-btn @click="next">next tab</v-btn>-->
                            <!--</div>-->
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>


<style lang="scss">
    @import "../assets/variable";
    #inner-single-page .primary{
        background-color: $primary-color !important;
    }
    .inner-left-nav.v-navigation-drawer{
        padding-top: 20px;
        height:100vh !important;
        .v-list--dense .v-list__tile{
            font-size:14px;
            height:47px;
            font-weight: 300;
        }
    }
    .yes-child{
        .v-list__group__items .v-list__tile{padding-left: 80px}
    }
    .device-tabs{
        .v-tabs__div{border-right:1px solid #fff}
        .v-tabs__item{
            font-size: 16px;
            font-weight: 300;
            display: inline-block;
            padding: 17px 0px 0px;
        }
        .v-tabs__item--active{
            background-color: $primary-color;
        }
    }
    .single-inner-tab{
        background-color: #f7f6ff !important;
        box-shadow: 0px 0px 5px #ccc;
        .v-label{
            color: #1e1e1e;
            display: block;
            margin-bottom: 10px;
            sup{font-size: 18px;}

        }
        .v-input__slot{
            border: 1px solid #b7b7b7;
        }
    }
    .radio-selection{
        .v-input__slot{border:none}
        .v-label{margin-bottom: 0}
    }
</style>

<script>
    export default {
        data(){
            return{
                show3: false,
                row1:null,
                row: null,
                active: null,
                items: [
                    {
                        icon: 'contacts',
                        text: 'New Device',
                        url:'/newDevice'
                    },
                    { icon: 'history', text: 'Wizard' },
                    { icon: 'content_copy', text: 'Mapped Object' },
                    { icon: 'group_work', text: 'New Interfaces Group' },
                    { icon: 'group', text: 'Interface Group Aggregation' },
                    {
                        icon: 'keyboard_arrow_up',
                        'icon-alt': 'keyboard_arrow_down',
                        text: 'Devices',
                        model: false,
                        children: [
                            { text: 'Device #1' },
                            { text: 'Device #2' },
                            { text: 'Device #3' },
                            { text: 'Device #4' },
                            { text: 'Device #5' },
                            { text: 'Device #6' }
                        ]
                    },
                    { icon: 'settings', text: 'Interface Groups' },
                    { icon: 'chat_bubble', text: 'Unmatched Traffic' },
                ],
                snpItems:['Snp item 1','Snp item 2','Snp item 3','Snp item 4','Snp item 5','Snp item 6'],
                snmpItems:['Version 1','Version 2','Version 3','Version 4','Version 5','Version 6'],
                connCredentials:['Connection 1','Connection 2','Connection 3','Connection 4','Connection 5','Connection 6'],
                connProtocol:['Protocol 1','Protocol 2','Protocol 3','Protocol 4','Protocol 5','Protocol 6'],
                authScript:['Script 1','Script 2','Script 3','Script 4','Script 5','Script 6'],
                sampleRate:['Rate 1','Rate 2','Rate 3','Rate 4','Rate 5','Rate 6'],
                getValue:''
            }
        },
        methods: {
            next () {
                const active = parseInt(this.active)
                this.active = (active < 2 ? active + 1 : 0)
            },
            show: function () {
                console.log(this.getValue);
            }
        }
    }
</script>