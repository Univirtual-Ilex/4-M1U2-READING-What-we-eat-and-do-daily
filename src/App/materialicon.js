import {css} from 'styled-components'

const mdi = css`
/* MaterialDesignIcons.com */
@font-face {
  font-family: "Material Design Icons";
  src: url("./fonts/mdi/materialdesignicons-webfont.eot?v=4.8.95");
  src: url("./fonts/mdi/materialdesignicons-webfont.eot?#iefix&v=4.8.95") format("embedded-opentype"), url("./fonts/mdi/materialdesignicons-webfont.woff2?v=4.8.95") format("woff2"), url("./fonts/mdi/materialdesignicons-webfont.woff?v=4.8.95") format("woff"), url("./fonts/mdi/materialdesignicons-webfont.ttf?v=4.8.95") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.mdi:before,
.mdi-set {
  display: inline-block;
  font: normal normal normal 24px/1 "Material Design Icons";
  font-size: inherit;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mdi-ab-testing::before {
  content: "\\F001C";
}

.mdi-access-point::before {
  content: "\\F002";
}

.mdi-access-point-network::before {
  content: "\\F003";
}

.mdi-access-point-network-off::before {
  content: "\\FBBD";
}

.mdi-account::before {
  content: "\\F004";
}

.mdi-account-alert::before {
  content: "\\F005";
}

.mdi-account-alert-outline::before {
  content: "\\FB2C";
}

.mdi-account-arrow-left::before {
  content: "\\FB2D";
}

.mdi-account-arrow-left-outline::before {
  content: "\\FB2E";
}

.mdi-account-arrow-right::before {
  content: "\\FB2F";
}

.mdi-account-arrow-right-outline::before {
  content: "\\FB30";
}

.mdi-account-badge::before {
  content: "\\FD83";
}

.mdi-account-badge-alert::before {
  content: "\\FD84";
}

.mdi-account-badge-alert-outline::before {
  content: "\\FD85";
}

.mdi-account-badge-horizontal::before {
  content: "\\FDF0";
}

.mdi-account-badge-horizontal-outline::before {
  content: "\\FDF1";
}

.mdi-account-badge-outline::before {
  content: "\\FD86";
}

.mdi-account-box::before {
  content: "\\F006";
}

.mdi-account-box-multiple::before {
  content: "\\F933";
}

.mdi-account-box-multiple-outline::before {
  content: "\\F002C";
}

.mdi-account-box-outline::before {
  content: "\\F007";
}

.mdi-account-cancel::before {
  content: "\\F030A";
}

.mdi-account-cancel-outline::before {
  content: "\\F030B";
}

.mdi-account-card-details::before {
  content: "\\F5D2";
}

.mdi-account-card-details-outline::before {
  content: "\\FD87";
}

.mdi-account-cash::before {
  content: "\\F00C2";
}

.mdi-account-cash-outline::before {
  content: "\\F00C3";
}

.mdi-account-check::before {
  content: "\\F008";
}

.mdi-account-check-outline::before {
  content: "\\FBBE";
}

.mdi-account-child::before {
  content: "\\FA88";
}

.mdi-account-child-circle::before {
  content: "\\FA89";
}

.mdi-account-child-outline::before {
  content: "\\F00F3";
}

.mdi-account-circle::before {
  content: "\\F009";
}

.mdi-account-circle-outline::before {
  content: "\\FB31";
}

.mdi-account-clock::before {
  content: "\\FB32";
}

.mdi-account-clock-outline::before {
  content: "\\FB33";
}

.mdi-account-convert::before {
  content: "\\F00A";
}

.mdi-account-convert-outline::before {
  content: "\\F032C";
}

.mdi-account-details::before {
  content: "\\F631";
}

.mdi-account-edit::before {
  content: "\\F6BB";
}

.mdi-account-edit-outline::before {
  content: "\\F001D";
}

.mdi-account-group::before {
  content: "\\F848";
}

.mdi-account-group-outline::before {
  content: "\\FB34";
}

.mdi-account-heart::before {
  content: "\\F898";
}

.mdi-account-heart-outline::before {
  content: "\\FBBF";
}

.mdi-account-key::before {
  content: "\\F00B";
}

.mdi-account-key-outline::before {
  content: "\\FBC0";
}

.mdi-account-lock::before {
  content: "\\F0189";
}

.mdi-account-lock-outline::before {
  content: "\\F018A";
}

.mdi-account-minus::before {
  content: "\\F00D";
}

.mdi-account-minus-outline::before {
  content: "\\FAEB";
}

.mdi-account-multiple::before {
  content: "\\F00E";
}

.mdi-account-multiple-check::before {
  content: "\\F8C4";
}

.mdi-account-multiple-check-outline::before {
  content: "\\F0229";
}

.mdi-account-multiple-minus::before {
  content: "\\F5D3";
}

.mdi-account-multiple-minus-outline::before {
  content: "\\FBC1";
}

.mdi-account-multiple-outline::before {
  content: "\\F00F";
}

.mdi-account-multiple-plus::before {
  content: "\\F010";
}

.mdi-account-multiple-plus-outline::before {
  content: "\\F7FF";
}

.mdi-account-multiple-remove::before {
  content: "\\F0235";
}

.mdi-account-multiple-remove-outline::before {
  content: "\\F0236";
}

.mdi-account-network::before {
  content: "\\F011";
}

.mdi-account-network-outline::before {
  content: "\\FBC2";
}

.mdi-account-off::before {
  content: "\\F012";
}

.mdi-account-off-outline::before {
  content: "\\FBC3";
}

.mdi-account-outline::before {
  content: "\\F013";
}

.mdi-account-plus::before {
  content: "\\F014";
}

.mdi-account-plus-outline::before {
  content: "\\F800";
}

.mdi-account-question::before {
  content: "\\FB35";
}

.mdi-account-question-outline::before {
  content: "\\FB36";
}

.mdi-account-remove::before {
  content: "\\F015";
}

.mdi-account-remove-outline::before {
  content: "\\FAEC";
}

.mdi-account-search::before {
  content: "\\F016";
}

.mdi-account-search-outline::before {
  content: "\\F934";
}

.mdi-account-settings::before {
  content: "\\F630";
}

.mdi-account-settings-outline::before {
  content: "\\F00F4";
}

.mdi-account-star::before {
  content: "\\F017";
}

.mdi-account-star-outline::before {
  content: "\\FBC4";
}

.mdi-account-supervisor::before {
  content: "\\FA8A";
}

.mdi-account-supervisor-circle::before {
  content: "\\FA8B";
}

.mdi-account-supervisor-outline::before {
  content: "\\F0158";
}

.mdi-account-switch::before {
  content: "\\F019";
}

.mdi-account-tie::before {
  content: "\\FCBF";
}

.mdi-account-tie-outline::before {
  content: "\\F00F5";
}

.mdi-account-tie-voice::before {
  content: "\\F0333";
}

.mdi-account-tie-voice-off::before {
  content: "\\F0335";
}

.mdi-account-tie-voice-off-outline::before {
  content: "\\F0336";
}

.mdi-account-tie-voice-outline::before {
  content: "\\F0334";
}

.mdi-accusoft::before {
  content: "\\F849";
}

.mdi-adjust::before {
  content: "\\F01A";
}

.mdi-adobe::before {
  content: "\\F935";
}

.mdi-adobe-acrobat::before {
  content: "\\FFBD";
}

.mdi-air-conditioner::before {
  content: "\\F01B";
}

.mdi-air-filter::before {
  content: "\\FD1F";
}

.mdi-air-horn::before {
  content: "\\FD88";
}

.mdi-air-humidifier::before {
  content: "\\F00C4";
}

.mdi-air-purifier::before {
  content: "\\FD20";
}

.mdi-airbag::before {
  content: "\\FBC5";
}

.mdi-airballoon::before {
  content: "\\F01C";
}

.mdi-airballoon-outline::before {
  content: "\\F002D";
}

.mdi-airplane::before {
  content: "\\F01D";
}

.mdi-airplane-landing::before {
  content: "\\F5D4";
}

.mdi-airplane-off::before {
  content: "\\F01E";
}

.mdi-airplane-takeoff::before {
  content: "\\F5D5";
}

.mdi-airplay::before {
  content: "\\F01F";
}

.mdi-airport::before {
  content: "\\F84A";
}

.mdi-alarm::before {
  content: "\\F020";
}

.mdi-alarm-bell::before {
  content: "\\F78D";
}

.mdi-alarm-check::before {
  content: "\\F021";
}

.mdi-alarm-light::before {
  content: "\\F78E";
}

.mdi-alarm-light-outline::before {
  content: "\\FBC6";
}

.mdi-alarm-multiple::before {
  content: "\\F022";
}

.mdi-alarm-note::before {
  content: "\\FE8E";
}

.mdi-alarm-note-off::before {
  content: "\\FE8F";
}

.mdi-alarm-off::before {
  content: "\\F023";
}

.mdi-alarm-plus::before {
  content: "\\F024";
}

.mdi-alarm-snooze::before {
  content: "\\F68D";
}

.mdi-album::before {
  content: "\\F025";
}

.mdi-alert::before {
  content: "\\F026";
}

.mdi-alert-box::before {
  content: "\\F027";
}

.mdi-alert-box-outline::before {
  content: "\\FCC0";
}

.mdi-alert-circle::before {
  content: "\\F028";
}

.mdi-alert-circle-check::before {
  content: "\\F0218";
}

.mdi-alert-circle-check-outline::before {
  content: "\\F0219";
}

.mdi-alert-circle-outline::before {
  content: "\\F5D6";
}

.mdi-alert-decagram::before {
  content: "\\F6BC";
}

.mdi-alert-decagram-outline::before {
  content: "\\FCC1";
}

.mdi-alert-octagon::before {
  content: "\\F029";
}

.mdi-alert-octagon-outline::before {
  content: "\\FCC2";
}

.mdi-alert-octagram::before {
  content: "\\F766";
}

.mdi-alert-octagram-outline::before {
  content: "\\FCC3";
}

.mdi-alert-outline::before {
  content: "\\F02A";
}

.mdi-alert-rhombus::before {
  content: "\\F01F9";
}

.mdi-alert-rhombus-outline::before {
  content: "\\F01FA";
}

.mdi-alien::before {
  content: "\\F899";
}

.mdi-alien-outline::before {
  content: "\\F00F6";
}

.mdi-align-horizontal-center::before {
  content: "\\F01EE";
}

.mdi-align-horizontal-left::before {
  content: "\\F01ED";
}

.mdi-align-horizontal-right::before {
  content: "\\F01EF";
}

.mdi-align-vertical-bottom::before {
  content: "\\F01F0";
}

.mdi-align-vertical-center::before {
  content: "\\F01F1";
}

.mdi-align-vertical-top::before {
  content: "\\F01F2";
}

.mdi-all-inclusive::before {
  content: "\\F6BD";
}

.mdi-allergy::before {
  content: "\\F0283";
}

.mdi-alpha::before {
  content: "\\F02B";
}

.mdi-alpha-a::before {
  content: "\\41";
}

.mdi-alpha-a-box::before {
  content: "\\FAED";
}

.mdi-alpha-a-box-outline::before {
  content: "\\FBC7";
}

.mdi-alpha-a-circle::before {
  content: "\\FBC8";
}

.mdi-alpha-a-circle-outline::before {
  content: "\\FBC9";
}

.mdi-alpha-b::before {
  content: "\\42";
}

.mdi-alpha-b-box::before {
  content: "\\FAEE";
}

.mdi-alpha-b-box-outline::before {
  content: "\\FBCA";
}

.mdi-alpha-b-circle::before {
  content: "\\FBCB";
}

.mdi-alpha-b-circle-outline::before {
  content: "\\FBCC";
}

.mdi-alpha-c::before {
  content: "\\43";
}

.mdi-alpha-c-box::before {
  content: "\\FAEF";
}

.mdi-alpha-c-box-outline::before {
  content: "\\FBCD";
}

.mdi-alpha-c-circle::before {
  content: "\\FBCE";
}

.mdi-alpha-c-circle-outline::before {
  content: "\\FBCF";
}

.mdi-alpha-d::before {
  content: "\\44";
}

.mdi-alpha-d-box::before {
  content: "\\FAF0";
}

.mdi-alpha-d-box-outline::before {
  content: "\\FBD0";
}

.mdi-alpha-d-circle::before {
  content: "\\FBD1";
}

.mdi-alpha-d-circle-outline::before {
  content: "\\FBD2";
}

.mdi-alpha-e::before {
  content: "\\45";
}

.mdi-alpha-e-box::before {
  content: "\\FAF1";
}

.mdi-alpha-e-box-outline::before {
  content: "\\FBD3";
}

.mdi-alpha-e-circle::before {
  content: "\\FBD4";
}

.mdi-alpha-e-circle-outline::before {
  content: "\\FBD5";
}

.mdi-alpha-f::before {
  content: "\\46";
}

.mdi-alpha-f-box::before {
  content: "\\FAF2";
}

.mdi-alpha-f-box-outline::before {
  content: "\\FBD6";
}

.mdi-alpha-f-circle::before {
  content: "\\FBD7";
}

.mdi-alpha-f-circle-outline::before {
  content: "\\FBD8";
}

.mdi-alpha-g::before {
  content: "\\47";
}

.mdi-alpha-g-box::before {
  content: "\\FAF3";
}

.mdi-alpha-g-box-outline::before {
  content: "\\FBD9";
}

.mdi-alpha-g-circle::before {
  content: "\\FBDA";
}

.mdi-alpha-g-circle-outline::before {
  content: "\\FBDB";
}

.mdi-alpha-h::before {
  content: "\\48";
}

.mdi-alpha-h-box::before {
  content: "\\FAF4";
}

.mdi-alpha-h-box-outline::before {
  content: "\\FBDC";
}

.mdi-alpha-h-circle::before {
  content: "\\FBDD";
}

.mdi-alpha-h-circle-outline::before {
  content: "\\FBDE";
}

.mdi-alpha-i::before {
  content: "\\49";
}

.mdi-alpha-i-box::before {
  content: "\\FAF5";
}

.mdi-alpha-i-box-outline::before {
  content: "\\FBDF";
}

.mdi-alpha-i-circle::before {
  content: "\\FBE0";
}

.mdi-alpha-i-circle-outline::before {
  content: "\\FBE1";
}

.mdi-alpha-j::before {
  content: "\\4A";
}

.mdi-alpha-j-box::before {
  content: "\\FAF6";
}

.mdi-alpha-j-box-outline::before {
  content: "\\FBE2";
}

.mdi-alpha-j-circle::before {
  content: "\\FBE3";
}

.mdi-alpha-j-circle-outline::before {
  content: "\\FBE4";
}

.mdi-alpha-k::before {
  content: "\\4B";
}

.mdi-alpha-k-box::before {
  content: "\\FAF7";
}

.mdi-alpha-k-box-outline::before {
  content: "\\FBE5";
}

.mdi-alpha-k-circle::before {
  content: "\\FBE6";
}

.mdi-alpha-k-circle-outline::before {
  content: "\\FBE7";
}

.mdi-alpha-l::before {
  content: "\\4C";
}

.mdi-alpha-l-box::before {
  content: "\\FAF8";
}

.mdi-alpha-l-box-outline::before {
  content: "\\FBE8";
}

.mdi-alpha-l-circle::before {
  content: "\\FBE9";
}

.mdi-alpha-l-circle-outline::before {
  content: "\\FBEA";
}

.mdi-alpha-m::before {
  content: "\\4D";
}

.mdi-alpha-m-box::before {
  content: "\\FAF9";
}

.mdi-alpha-m-box-outline::before {
  content: "\\FBEB";
}

.mdi-alpha-m-circle::before {
  content: "\\FBEC";
}

.mdi-alpha-m-circle-outline::before {
  content: "\\FBED";
}

.mdi-alpha-n::before {
  content: "\\4E";
}

.mdi-alpha-n-box::before {
  content: "\\FAFA";
}

.mdi-alpha-n-box-outline::before {
  content: "\\FBEE";
}

.mdi-alpha-n-circle::before {
  content: "\\FBEF";
}

.mdi-alpha-n-circle-outline::before {
  content: "\\FBF0";
}

.mdi-alpha-o::before {
  content: "\\4F";
}

.mdi-alpha-o-box::before {
  content: "\\FAFB";
}

.mdi-alpha-o-box-outline::before {
  content: "\\FBF1";
}

.mdi-alpha-o-circle::before {
  content: "\\FBF2";
}

.mdi-alpha-o-circle-outline::before {
  content: "\\FBF3";
}

.mdi-alpha-p::before {
  content: "\\50";
}

.mdi-alpha-p-box::before {
  content: "\\FAFC";
}

.mdi-alpha-p-box-outline::before {
  content: "\\FBF4";
}

.mdi-alpha-p-circle::before {
  content: "\\FBF5";
}

.mdi-alpha-p-circle-outline::before {
  content: "\\FBF6";
}

.mdi-alpha-q::before {
  content: "\\51";
}

.mdi-alpha-q-box::before {
  content: "\\FAFD";
}

.mdi-alpha-q-box-outline::before {
  content: "\\FBF7";
}

.mdi-alpha-q-circle::before {
  content: "\\FBF8";
}

.mdi-alpha-q-circle-outline::before {
  content: "\\FBF9";
}

.mdi-alpha-r::before {
  content: "\\52";
}

.mdi-alpha-r-box::before {
  content: "\\FAFE";
}

.mdi-alpha-r-box-outline::before {
  content: "\\FBFA";
}

.mdi-alpha-r-circle::before {
  content: "\\FBFB";
}

.mdi-alpha-r-circle-outline::before {
  content: "\\FBFC";
}

.mdi-alpha-s::before {
  content: "\\53";
}

.mdi-alpha-s-box::before {
  content: "\\FAFF";
}

.mdi-alpha-s-box-outline::before {
  content: "\\FBFD";
}

.mdi-alpha-s-circle::before {
  content: "\\FBFE";
}

.mdi-alpha-s-circle-outline::before {
  content: "\\FBFF";
}

.mdi-alpha-t::before {
  content: "\\54";
}

.mdi-alpha-t-box::before {
  content: "\\FB00";
}

.mdi-alpha-t-box-outline::before {
  content: "\\FC00";
}

.mdi-alpha-t-circle::before {
  content: "\\FC01";
}

.mdi-alpha-t-circle-outline::before {
  content: "\\FC02";
}

.mdi-alpha-u::before {
  content: "\\55";
}

.mdi-alpha-u-box::before {
  content: "\\FB01";
}

.mdi-alpha-u-box-outline::before {
  content: "\\FC03";
}

.mdi-alpha-u-circle::before {
  content: "\\FC04";
}

.mdi-alpha-u-circle-outline::before {
  content: "\\FC05";
}

.mdi-alpha-v::before {
  content: "\\56";
}

.mdi-alpha-v-box::before {
  content: "\\FB02";
}

.mdi-alpha-v-box-outline::before {
  content: "\\FC06";
}

.mdi-alpha-v-circle::before {
  content: "\\FC07";
}

.mdi-alpha-v-circle-outline::before {
  content: "\\FC08";
}

.mdi-alpha-w::before {
  content: "\\57";
}

.mdi-alpha-w-box::before {
  content: "\\FB03";
}

.mdi-alpha-w-box-outline::before {
  content: "\\FC09";
}

.mdi-alpha-w-circle::before {
  content: "\\FC0A";
}

.mdi-alpha-w-circle-outline::before {
  content: "\\FC0B";
}

.mdi-alpha-x::before {
  content: "\\58";
}

.mdi-alpha-x-box::before {
  content: "\\FB04";
}

.mdi-alpha-x-box-outline::before {
  content: "\\FC0C";
}

.mdi-alpha-x-circle::before {
  content: "\\FC0D";
}

.mdi-alpha-x-circle-outline::before {
  content: "\\FC0E";
}

.mdi-alpha-y::before {
  content: "\\59";
}

.mdi-alpha-y-box::before {
  content: "\\FB05";
}

.mdi-alpha-y-box-outline::before {
  content: "\\FC0F";
}

.mdi-alpha-y-circle::before {
  content: "\\FC10";
}

.mdi-alpha-y-circle-outline::before {
  content: "\\FC11";
}

.mdi-alpha-z::before {
  content: "\\5A";
}

.mdi-alpha-z-box::before {
  content: "\\FB06";
}

.mdi-alpha-z-box-outline::before {
  content: "\\FC12";
}

.mdi-alpha-z-circle::before {
  content: "\\FC13";
}

.mdi-alpha-z-circle-outline::before {
  content: "\\FC14";
}

.mdi-alphabetical::before {
  content: "\\F02C";
}

.mdi-alphabetical-off::before {
  content: "\\F002E";
}

.mdi-alphabetical-variant::before {
  content: "\\F002F";
}

.mdi-alphabetical-variant-off::before {
  content: "\\F0030";
}

.mdi-altimeter::before {
  content: "\\F5D7";
}

.mdi-amazon::before {
  content: "\\F02D";
}

.mdi-amazon-alexa::before {
  content: "\\F8C5";
}

.mdi-amazon-drive::before {
  content: "\\F02E";
}

.mdi-ambulance::before {
  content: "\\F02F";
}

.mdi-ammunition::before {
  content: "\\FCC4";
}

.mdi-ampersand::before {
  content: "\\FA8C";
}

.mdi-amplifier::before {
  content: "\\F030";
}

.mdi-amplifier-off::before {
  content: "\\F01E0";
}

.mdi-anchor::before {
  content: "\\F031";
}

.mdi-android::before {
  content: "\\F032";
}

.mdi-android-auto::before {
  content: "\\FA8D";
}

.mdi-android-debug-bridge::before {
  content: "\\F033";
}

.mdi-android-head::before {
  content: "\\F78F";
}

.mdi-android-messages::before {
  content: "\\FD21";
}

.mdi-android-studio::before {
  content: "\\F034";
}

.mdi-angle-acute::before {
  content: "\\F936";
}

.mdi-angle-obtuse::before {
  content: "\\F937";
}

.mdi-angle-right::before {
  content: "\\F938";
}

.mdi-angular::before {
  content: "\\F6B1";
}

.mdi-angularjs::before {
  content: "\\F6BE";
}

.mdi-animation::before {
  content: "\\F5D8";
}

.mdi-animation-outline::before {
  content: "\\FA8E";
}

.mdi-animation-play::before {
  content: "\\F939";
}

.mdi-animation-play-outline::before {
  content: "\\FA8F";
}

.mdi-ansible::before {
  content: "\\F00C5";
}

.mdi-antenna::before {
  content: "\\F0144";
}

.mdi-anvil::before {
  content: "\\F89A";
}

.mdi-apache-kafka::before {
  content: "\\F0031";
}

.mdi-api::before {
  content: "\\F00C6";
}

.mdi-api-off::before {
  content: "\\F0282";
}

.mdi-apple::before {
  content: "\\F035";
}

.mdi-apple-finder::before {
  content: "\\F036";
}

.mdi-apple-icloud::before {
  content: "\\F038";
}

.mdi-apple-ios::before {
  content: "\\F037";
}

.mdi-apple-keyboard-caps::before {
  content: "\\F632";
}

.mdi-apple-keyboard-command::before {
  content: "\\F633";
}

.mdi-apple-keyboard-control::before {
  content: "\\F634";
}

.mdi-apple-keyboard-option::before {
  content: "\\F635";
}

.mdi-apple-keyboard-shift::before {
  content: "\\F636";
}

.mdi-apple-safari::before {
  content: "\\F039";
}

.mdi-application::before {
  content: "\\F614";
}

.mdi-application-export::before {
  content: "\\FD89";
}

.mdi-application-import::before {
  content: "\\FD8A";
}

.mdi-approximately-equal::before {
  content: "\\FFBE";
}

.mdi-approximately-equal-box::before {
  content: "\\FFBF";
}

.mdi-apps::before {
  content: "\\F03B";
}

.mdi-apps-box::before {
  content: "\\FD22";
}

.mdi-arch::before {
  content: "\\F8C6";
}

.mdi-archive::before {
  content: "\\F03C";
}

.mdi-archive-arrow-down::before {
  content: "\\F0284";
}

.mdi-archive-arrow-down-outline::before {
  content: "\\F0285";
}

.mdi-archive-arrow-up::before {
  content: "\\F0286";
}

.mdi-archive-arrow-up-outline::before {
  content: "\\F0287";
}

.mdi-archive-outline::before {
  content: "\\F0239";
}

.mdi-arm-flex::before {
  content: "\\F008F";
}

.mdi-arm-flex-outline::before {
  content: "\\F0090";
}

.mdi-arrange-bring-forward::before {
  content: "\\F03D";
}

.mdi-arrange-bring-to-front::before {
  content: "\\F03E";
}

.mdi-arrange-send-backward::before {
  content: "\\F03F";
}

.mdi-arrange-send-to-back::before {
  content: "\\F040";
}

.mdi-arrow-all::before {
  content: "\\F041";
}

.mdi-arrow-bottom-left::before {
  content: "\\F042";
}

.mdi-arrow-bottom-left-bold-outline::before {
  content: "\\F9B6";
}

.mdi-arrow-bottom-left-thick::before {
  content: "\\F9B7";
}

.mdi-arrow-bottom-right::before {
  content: "\\F043";
}

.mdi-arrow-bottom-right-bold-outline::before {
  content: "\\F9B8";
}

.mdi-arrow-bottom-right-thick::before {
  content: "\\F9B9";
}

.mdi-arrow-collapse::before {
  content: "\\F615";
}

.mdi-arrow-collapse-all::before {
  content: "\\F044";
}

.mdi-arrow-collapse-down::before {
  content: "\\F791";
}

.mdi-arrow-collapse-horizontal::before {
  content: "\\F84B";
}

.mdi-arrow-collapse-left::before {
  content: "\\F792";
}

.mdi-arrow-collapse-right::before {
  content: "\\F793";
}

.mdi-arrow-collapse-up::before {
  content: "\\F794";
}

.mdi-arrow-collapse-vertical::before {
  content: "\\F84C";
}

.mdi-arrow-decision::before {
  content: "\\F9BA";
}

.mdi-arrow-decision-auto::before {
  content: "\\F9BB";
}

.mdi-arrow-decision-auto-outline::before {
  content: "\\F9BC";
}

.mdi-arrow-decision-outline::before {
  content: "\\F9BD";
}

.mdi-arrow-down::before {
  content: "\\F045";
}

.mdi-arrow-down-bold::before {
  content: "\\F72D";
}

.mdi-arrow-down-bold-box::before {
  content: "\\F72E";
}

.mdi-arrow-down-bold-box-outline::before {
  content: "\\F72F";
}

.mdi-arrow-down-bold-circle::before {
  content: "\\F047";
}

.mdi-arrow-down-bold-circle-outline::before {
  content: "\\F048";
}

.mdi-arrow-down-bold-hexagon-outline::before {
  content: "\\F049";
}

.mdi-arrow-down-bold-outline::before {
  content: "\\F9BE";
}

.mdi-arrow-down-box::before {
  content: "\\F6BF";
}

.mdi-arrow-down-circle::before {
  content: "\\FCB7";
}

.mdi-arrow-down-circle-outline::before {
  content: "\\FCB8";
}

.mdi-arrow-down-drop-circle::before {
  content: "\\F04A";
}

.mdi-arrow-down-drop-circle-outline::before {
  content: "\\F04B";
}

.mdi-arrow-down-thick::before {
  content: "\\F046";
}

.mdi-arrow-expand::before {
  content: "\\F616";
}

.mdi-arrow-expand-all::before {
  content: "\\F04C";
}

.mdi-arrow-expand-down::before {
  content: "\\F795";
}

.mdi-arrow-expand-horizontal::before {
  content: "\\F84D";
}

.mdi-arrow-expand-left::before {
  content: "\\F796";
}

.mdi-arrow-expand-right::before {
  content: "\\F797";
}

.mdi-arrow-expand-up::before {
  content: "\\F798";
}

.mdi-arrow-expand-vertical::before {
  content: "\\F84E";
}

.mdi-arrow-horizontal-lock::before {
  content: "\\F0186";
}

.mdi-arrow-left::before {
  content: "\\F04D";
}

.mdi-arrow-left-bold::before {
  content: "\\F730";
}

.mdi-arrow-left-bold-box::before {
  content: "\\F731";
}

.mdi-arrow-left-bold-box-outline::before {
  content: "\\F732";
}

.mdi-arrow-left-bold-circle::before {
  content: "\\F04F";
}

.mdi-arrow-left-bold-circle-outline::before {
  content: "\\F050";
}

.mdi-arrow-left-bold-hexagon-outline::before {
  content: "\\F051";
}

.mdi-arrow-left-bold-outline::before {
  content: "\\F9BF";
}

.mdi-arrow-left-box::before {
  content: "\\F6C0";
}

.mdi-arrow-left-circle::before {
  content: "\\FCB9";
}

.mdi-arrow-left-circle-outline::before {
  content: "\\FCBA";
}

.mdi-arrow-left-drop-circle::before {
  content: "\\F052";
}

.mdi-arrow-left-drop-circle-outline::before {
  content: "\\F053";
}

.mdi-arrow-left-right::before {
  content: "\\FE90";
}

.mdi-arrow-left-right-bold::before {
  content: "\\FE91";
}

.mdi-arrow-left-right-bold-outline::before {
  content: "\\F9C0";
}

.mdi-arrow-left-thick::before {
  content: "\\F04E";
}

.mdi-arrow-right::before {
  content: "\\F054";
}

.mdi-arrow-right-bold::before {
  content: "\\F733";
}

.mdi-arrow-right-bold-box::before {
  content: "\\F734";
}

.mdi-arrow-right-bold-box-outline::before {
  content: "\\F735";
}

.mdi-arrow-right-bold-circle::before {
  content: "\\F056";
}

.mdi-arrow-right-bold-circle-outline::before {
  content: "\\F057";
}

.mdi-arrow-right-bold-hexagon-outline::before {
  content: "\\F058";
}

.mdi-arrow-right-bold-outline::before {
  content: "\\F9C1";
}

.mdi-arrow-right-box::before {
  content: "\\F6C1";
}

.mdi-arrow-right-circle::before {
  content: "\\FCBB";
}

.mdi-arrow-right-circle-outline::before {
  content: "\\FCBC";
}

.mdi-arrow-right-drop-circle::before {
  content: "\\F059";
}

.mdi-arrow-right-drop-circle-outline::before {
  content: "\\F05A";
}

.mdi-arrow-right-thick::before {
  content: "\\F055";
}

.mdi-arrow-split-horizontal::before {
  content: "\\F93A";
}

.mdi-arrow-split-vertical::before {
  content: "\\F93B";
}

.mdi-arrow-top-left::before {
  content: "\\F05B";
}

.mdi-arrow-top-left-bold-outline::before {
  content: "\\F9C2";
}

.mdi-arrow-top-left-bottom-right::before {
  content: "\\FE92";
}

.mdi-arrow-top-left-bottom-right-bold::before {
  content: "\\FE93";
}

.mdi-arrow-top-left-thick::before {
  content: "\\F9C3";
}

.mdi-arrow-top-right::before {
  content: "\\F05C";
}

.mdi-arrow-top-right-bold-outline::before {
  content: "\\F9C4";
}

.mdi-arrow-top-right-bottom-left::before {
  content: "\\FE94";
}

.mdi-arrow-top-right-bottom-left-bold::before {
  content: "\\FE95";
}

.mdi-arrow-top-right-thick::before {
  content: "\\F9C5";
}

.mdi-arrow-up::before {
  content: "\\F05D";
}

.mdi-arrow-up-bold::before {
  content: "\\F736";
}

.mdi-arrow-up-bold-box::before {
  content: "\\F737";
}

.mdi-arrow-up-bold-box-outline::before {
  content: "\\F738";
}

.mdi-arrow-up-bold-circle::before {
  content: "\\F05F";
}

.mdi-arrow-up-bold-circle-outline::before {
  content: "\\F060";
}

.mdi-arrow-up-bold-hexagon-outline::before {
  content: "\\F061";
}

.mdi-arrow-up-bold-outline::before {
  content: "\\F9C6";
}

.mdi-arrow-up-box::before {
  content: "\\F6C2";
}

.mdi-arrow-up-circle::before {
  content: "\\FCBD";
}

.mdi-arrow-up-circle-outline::before {
  content: "\\FCBE";
}

.mdi-arrow-up-down::before {
  content: "\\FE96";
}

.mdi-arrow-up-down-bold::before {
  content: "\\FE97";
}

.mdi-arrow-up-down-bold-outline::before {
  content: "\\F9C7";
}

.mdi-arrow-up-drop-circle::before {
  content: "\\F062";
}

.mdi-arrow-up-drop-circle-outline::before {
  content: "\\F063";
}

.mdi-arrow-up-thick::before {
  content: "\\F05E";
}

.mdi-arrow-vertical-lock::before {
  content: "\\F0187";
}

.mdi-artist::before {
  content: "\\F802";
}

.mdi-artist-outline::before {
  content: "\\FCC5";
}

.mdi-artstation::before {
  content: "\\FB37";
}

.mdi-aspect-ratio::before {
  content: "\\FA23";
}

.mdi-assistant::before {
  content: "\\F064";
}

.mdi-asterisk::before {
  content: "\\F6C3";
}

.mdi-at::before {
  content: "\\F065";
}

.mdi-atlassian::before {
  content: "\\F803";
}

.mdi-atm::before {
  content: "\\FD23";
}

.mdi-atom::before {
  content: "\\F767";
}

.mdi-atom-variant::before {
  content: "\\FE98";
}

.mdi-attachment::before {
  content: "\\F066";
}

.mdi-audio-video::before {
  content: "\\F93C";
}

.mdi-audio-video-off::before {
  content: "\\F01E1";
}

.mdi-audiobook::before {
  content: "\\F067";
}

.mdi-augmented-reality::before {
  content: "\\F84F";
}

.mdi-auto-fix::before {
  content: "\\F068";
}

.mdi-auto-upload::before {
  content: "\\F069";
}

.mdi-autorenew::before {
  content: "\\F06A";
}

.mdi-av-timer::before {
  content: "\\F06B";
}

.mdi-aws::before {
  content: "\\FDF2";
}

.mdi-axe::before {
  content: "\\F8C7";
}

.mdi-axis::before {
  content: "\\FD24";
}

.mdi-axis-arrow::before {
  content: "\\FD25";
}

.mdi-axis-arrow-lock::before {
  content: "\\FD26";
}

.mdi-axis-lock::before {
  content: "\\FD27";
}

.mdi-axis-x-arrow::before {
  content: "\\FD28";
}

.mdi-axis-x-arrow-lock::before {
  content: "\\FD29";
}

.mdi-axis-x-rotate-clockwise::before {
  content: "\\FD2A";
}

.mdi-axis-x-rotate-counterclockwise::before {
  content: "\\FD2B";
}

.mdi-axis-x-y-arrow-lock::before {
  content: "\\FD2C";
}

.mdi-axis-y-arrow::before {
  content: "\\FD2D";
}

.mdi-axis-y-arrow-lock::before {
  content: "\\FD2E";
}

.mdi-axis-y-rotate-clockwise::before {
  content: "\\FD2F";
}

.mdi-axis-y-rotate-counterclockwise::before {
  content: "\\FD30";
}

.mdi-axis-z-arrow::before {
  content: "\\FD31";
}

.mdi-axis-z-arrow-lock::before {
  content: "\\FD32";
}

.mdi-axis-z-rotate-clockwise::before {
  content: "\\FD33";
}

.mdi-axis-z-rotate-counterclockwise::before {
  content: "\\FD34";
}

.mdi-azure::before {
  content: "\\F804";
}

.mdi-azure-devops::before {
  content: "\\F0091";
}

.mdi-babel::before {
  content: "\\FA24";
}

.mdi-baby::before {
  content: "\\F06C";
}

.mdi-baby-bottle::before {
  content: "\\FF56";
}

.mdi-baby-bottle-outline::before {
  content: "\\FF57";
}

.mdi-baby-carriage::before {
  content: "\\F68E";
}

.mdi-baby-carriage-off::before {
  content: "\\FFC0";
}

.mdi-baby-face::before {
  content: "\\FE99";
}

.mdi-baby-face-outline::before {
  content: "\\FE9A";
}

.mdi-backburger::before {
  content: "\\F06D";
}

.mdi-backspace::before {
  content: "\\F06E";
}

.mdi-backspace-outline::before {
  content: "\\FB38";
}

.mdi-backspace-reverse::before {
  content: "\\FE9B";
}

.mdi-backspace-reverse-outline::before {
  content: "\\FE9C";
}

.mdi-backup-restore::before {
  content: "\\F06F";
}

.mdi-bacteria::before {
  content: "\\FEF2";
}

.mdi-bacteria-outline::before {
  content: "\\FEF3";
}

.mdi-badminton::before {
  content: "\\F850";
}

.mdi-bag-carry-on::before {
  content: "\\FF58";
}

.mdi-bag-carry-on-check::before {
  content: "\\FD41";
}

.mdi-bag-carry-on-off::before {
  content: "\\FF59";
}

.mdi-bag-checked::before {
  content: "\\FF5A";
}

.mdi-bag-personal::before {
  content: "\\FDF3";
}

.mdi-bag-personal-off::before {
  content: "\\FDF4";
}

.mdi-bag-personal-off-outline::before {
  content: "\\FDF5";
}

.mdi-bag-personal-outline::before {
  content: "\\FDF6";
}

.mdi-baguette::before {
  content: "\\FF5B";
}

.mdi-balloon::before {
  content: "\\FA25";
}

.mdi-ballot::before {
  content: "\\F9C8";
}

.mdi-ballot-outline::before {
  content: "\\F9C9";
}

.mdi-ballot-recount::before {
  content: "\\FC15";
}

.mdi-ballot-recount-outline::before {
  content: "\\FC16";
}

.mdi-bandage::before {
  content: "\\FD8B";
}

.mdi-bandcamp::before {
  content: "\\F674";
}

.mdi-bank::before {
  content: "\\F070";
}

.mdi-bank-minus::before {
  content: "\\FD8C";
}

.mdi-bank-outline::before {
  content: "\\FE9D";
}

.mdi-bank-plus::before {
  content: "\\FD8D";
}

.mdi-bank-remove::before {
  content: "\\FD8E";
}

.mdi-bank-transfer::before {
  content: "\\FA26";
}

.mdi-bank-transfer-in::before {
  content: "\\FA27";
}

.mdi-bank-transfer-out::before {
  content: "\\FA28";
}

.mdi-barcode::before {
  content: "\\F071";
}

.mdi-barcode-off::before {
  content: "\\F0261";
}

.mdi-barcode-scan::before {
  content: "\\F072";
}

.mdi-barley::before {
  content: "\\F073";
}

.mdi-barley-off::before {
  content: "\\FB39";
}

.mdi-barn::before {
  content: "\\FB3A";
}

.mdi-barrel::before {
  content: "\\F074";
}

.mdi-baseball::before {
  content: "\\F851";
}

.mdi-baseball-bat::before {
  content: "\\F852";
}

.mdi-basecamp::before {
  content: "\\F075";
}

.mdi-bash::before {
  content: "\\F01AE";
}

.mdi-basket::before {
  content: "\\F076";
}

.mdi-basket-fill::before {
  content: "\\F077";
}

.mdi-basket-outline::before {
  content: "\\F01AC";
}

.mdi-basket-unfill::before {
  content: "\\F078";
}

.mdi-basketball::before {
  content: "\\F805";
}

.mdi-basketball-hoop::before {
  content: "\\FC17";
}

.mdi-basketball-hoop-outline::before {
  content: "\\FC18";
}

.mdi-bat::before {
  content: "\\FB3B";
}

.mdi-battery::before {
  content: "\\F079";
}

.mdi-battery-10::before {
  content: "\\F07A";
}

.mdi-battery-10-bluetooth::before {
  content: "\\F93D";
}

.mdi-battery-20::before {
  content: "\\F07B";
}

.mdi-battery-20-bluetooth::before {
  content: "\\F93E";
}

.mdi-battery-30::before {
  content: "\\F07C";
}

.mdi-battery-30-bluetooth::before {
  content: "\\F93F";
}

.mdi-battery-40::before {
  content: "\\F07D";
}

.mdi-battery-40-bluetooth::before {
  content: "\\F940";
}

.mdi-battery-50::before {
  content: "\\F07E";
}

.mdi-battery-50-bluetooth::before {
  content: "\\F941";
}

.mdi-battery-60::before {
  content: "\\F07F";
}

.mdi-battery-60-bluetooth::before {
  content: "\\F942";
}

.mdi-battery-70::before {
  content: "\\F080";
}

.mdi-battery-70-bluetooth::before {
  content: "\\F943";
}

.mdi-battery-80::before {
  content: "\\F081";
}

.mdi-battery-80-bluetooth::before {
  content: "\\F944";
}

.mdi-battery-90::before {
  content: "\\F082";
}

.mdi-battery-90-bluetooth::before {
  content: "\\F945";
}

.mdi-battery-alert::before {
  content: "\\F083";
}

.mdi-battery-alert-bluetooth::before {
  content: "\\F946";
}

.mdi-battery-alert-variant::before {
  content: "\\F00F7";
}

.mdi-battery-alert-variant-outline::before {
  content: "\\F00F8";
}

.mdi-battery-bluetooth::before {
  content: "\\F947";
}

.mdi-battery-bluetooth-variant::before {
  content: "\\F948";
}

.mdi-battery-charging::before {
  content: "\\F084";
}

.mdi-battery-charging-10::before {
  content: "\\F89B";
}

.mdi-battery-charging-100::before {
  content: "\\F085";
}

.mdi-battery-charging-20::before {
  content: "\\F086";
}

.mdi-battery-charging-30::before {
  content: "\\F087";
}

.mdi-battery-charging-40::before {
  content: "\\F088";
}

.mdi-battery-charging-50::before {
  content: "\\F89C";
}

.mdi-battery-charging-60::before {
  content: "\\F089";
}

.mdi-battery-charging-70::before {
  content: "\\F89D";
}

.mdi-battery-charging-80::before {
  content: "\\F08A";
}

.mdi-battery-charging-90::before {
  content: "\\F08B";
}

.mdi-battery-charging-high::before {
  content: "\\F02D1";
}

.mdi-battery-charging-low::before {
  content: "\\F02CF";
}

.mdi-battery-charging-medium::before {
  content: "\\F02D0";
}

.mdi-battery-charging-outline::before {
  content: "\\F89E";
}

.mdi-battery-charging-wireless::before {
  content: "\\F806";
}

.mdi-battery-charging-wireless-10::before {
  content: "\\F807";
}

.mdi-battery-charging-wireless-20::before {
  content: "\\F808";
}

.mdi-battery-charging-wireless-30::before {
  content: "\\F809";
}

.mdi-battery-charging-wireless-40::before {
  content: "\\F80A";
}

.mdi-battery-charging-wireless-50::before {
  content: "\\F80B";
}

.mdi-battery-charging-wireless-60::before {
  content: "\\F80C";
}

.mdi-battery-charging-wireless-70::before {
  content: "\\F80D";
}

.mdi-battery-charging-wireless-80::before {
  content: "\\F80E";
}

.mdi-battery-charging-wireless-90::before {
  content: "\\F80F";
}

.mdi-battery-charging-wireless-alert::before {
  content: "\\F810";
}

.mdi-battery-charging-wireless-outline::before {
  content: "\\F811";
}

.mdi-battery-heart::before {
  content: "\\F023A";
}

.mdi-battery-heart-outline::before {
  content: "\\F023B";
}

.mdi-battery-heart-variant::before {
  content: "\\F023C";
}

.mdi-battery-high::before {
  content: "\\F02CE";
}

.mdi-battery-low::before {
  content: "\\F02CC";
}

.mdi-battery-medium::before {
  content: "\\F02CD";
}

.mdi-battery-minus::before {
  content: "\\F08C";
}

.mdi-battery-negative::before {
  content: "\\F08D";
}

.mdi-battery-off::before {
  content: "\\F0288";
}

.mdi-battery-off-outline::before {
  content: "\\F0289";
}

.mdi-battery-outline::before {
  content: "\\F08E";
}

.mdi-battery-plus::before {
  content: "\\F08F";
}

.mdi-battery-positive::before {
  content: "\\F090";
}

.mdi-battery-unknown::before {
  content: "\\F091";
}

.mdi-battery-unknown-bluetooth::before {
  content: "\\F949";
}

.mdi-battlenet::before {
  content: "\\FB3C";
}

.mdi-beach::before {
  content: "\\F092";
}

.mdi-beaker::before {
  content: "\\FCC6";
}

.mdi-beaker-alert::before {
  content: "\\F0254";
}

.mdi-beaker-alert-outline::before {
  content: "\\F0255";
}

.mdi-beaker-check::before {
  content: "\\F0256";
}

.mdi-beaker-check-outline::before {
  content: "\\F0257";
}

.mdi-beaker-minus::before {
  content: "\\F0258";
}

.mdi-beaker-minus-outline::before {
  content: "\\F0259";
}

.mdi-beaker-outline::before {
  content: "\\F68F";
}

.mdi-beaker-plus::before {
  content: "\\F025A";
}

.mdi-beaker-plus-outline::before {
  content: "\\F025B";
}

.mdi-beaker-question::before {
  content: "\\F025C";
}

.mdi-beaker-question-outline::before {
  content: "\\F025D";
}

.mdi-beaker-remove::before {
  content: "\\F025E";
}

.mdi-beaker-remove-outline::before {
  content: "\\F025F";
}

.mdi-beats::before {
  content: "\\F097";
}

.mdi-bed-double::before {
  content: "\\F0092";
}

.mdi-bed-double-outline::before {
  content: "\\F0093";
}

.mdi-bed-empty::before {
  content: "\\F89F";
}

.mdi-bed-king::before {
  content: "\\F0094";
}

.mdi-bed-king-outline::before {
  content: "\\F0095";
}

.mdi-bed-queen::before {
  content: "\\F0096";
}

.mdi-bed-queen-outline::before {
  content: "\\F0097";
}

.mdi-bed-single::before {
  content: "\\F0098";
}

.mdi-bed-single-outline::before {
  content: "\\F0099";
}

.mdi-bee::before {
  content: "\\FFC1";
}

.mdi-bee-flower::before {
  content: "\\FFC2";
}

.mdi-beehive-outline::before {
  content: "\\F00F9";
}

.mdi-beer::before {
  content: "\\F098";
}

.mdi-beer-outline::before {
  content: "\\F0337";
}

.mdi-behance::before {
  content: "\\F099";
}

.mdi-bell::before {
  content: "\\F09A";
}

.mdi-bell-alert::before {
  content: "\\FD35";
}

.mdi-bell-alert-outline::before {
  content: "\\FE9E";
}

.mdi-bell-check::before {
  content: "\\F0210";
}

.mdi-bell-check-outline::before {
  content: "\\F0211";
}

.mdi-bell-circle::before {
  content: "\\FD36";
}

.mdi-bell-circle-outline::before {
  content: "\\FD37";
}

.mdi-bell-off::before {
  content: "\\F09B";
}

.mdi-bell-off-outline::before {
  content: "\\FA90";
}

.mdi-bell-outline::before {
  content: "\\F09C";
}

.mdi-bell-plus::before {
  content: "\\F09D";
}

.mdi-bell-plus-outline::before {
  content: "\\FA91";
}

.mdi-bell-ring::before {
  content: "\\F09E";
}

.mdi-bell-ring-outline::before {
  content: "\\F09F";
}

.mdi-bell-sleep::before {
  content: "\\F0A0";
}

.mdi-bell-sleep-outline::before {
  content: "\\FA92";
}

.mdi-beta::before {
  content: "\\F0A1";
}

.mdi-betamax::before {
  content: "\\F9CA";
}

.mdi-biathlon::before {
  content: "\\FDF7";
}

.mdi-bible::before {
  content: "\\F0A2";
}

.mdi-bicycle::before {
  content: "\\F00C7";
}

.mdi-bicycle-basket::before {
  content: "\\F0260";
}

.mdi-bike::before {
  content: "\\F0A3";
}

.mdi-bike-fast::before {
  content: "\\F014A";
}

.mdi-billboard::before {
  content: "\\F0032";
}

.mdi-billiards::before {
  content: "\\FB3D";
}

.mdi-billiards-rack::before {
  content: "\\FB3E";
}

.mdi-bing::before {
  content: "\\F0A4";
}

.mdi-binoculars::before {
  content: "\\F0A5";
}

.mdi-bio::before {
  content: "\\F0A6";
}

.mdi-biohazard::before {
  content: "\\F0A7";
}

.mdi-bitbucket::before {
  content: "\\F0A8";
}

.mdi-bitcoin::before {
  content: "\\F812";
}

.mdi-black-mesa::before {
  content: "\\F0A9";
}

.mdi-blackberry::before {
  content: "\\F0AA";
}

.mdi-blender::before {
  content: "\\FCC7";
}

.mdi-blender-software::before {
  content: "\\F0AB";
}

.mdi-blinds::before {
  content: "\\F0AC";
}

.mdi-blinds-open::before {
  content: "\\F0033";
}

.mdi-block-helper::before {
  content: "\\F0AD";
}

.mdi-blogger::before {
  content: "\\F0AE";
}

.mdi-blood-bag::before {
  content: "\\FCC8";
}

.mdi-bluetooth::before {
  content: "\\F0AF";
}

.mdi-bluetooth-audio::before {
  content: "\\F0B0";
}

.mdi-bluetooth-connect::before {
  content: "\\F0B1";
}

.mdi-bluetooth-off::before {
  content: "\\F0B2";
}

.mdi-bluetooth-settings::before {
  content: "\\F0B3";
}

.mdi-bluetooth-transfer::before {
  content: "\\F0B4";
}

.mdi-blur::before {
  content: "\\F0B5";
}

.mdi-blur-linear::before {
  content: "\\F0B6";
}

.mdi-blur-off::before {
  content: "\\F0B7";
}

.mdi-blur-radial::before {
  content: "\\F0B8";
}

.mdi-bolnisi-cross::before {
  content: "\\FCC9";
}

.mdi-bolt::before {
  content: "\\FD8F";
}

.mdi-bomb::before {
  content: "\\F690";
}

.mdi-bomb-off::before {
  content: "\\F6C4";
}

.mdi-bone::before {
  content: "\\F0B9";
}

.mdi-book::before {
  content: "\\F0BA";
}

.mdi-book-information-variant::before {
  content: "\\F009A";
}

.mdi-book-lock::before {
  content: "\\F799";
}

.mdi-book-lock-open::before {
  content: "\\F79A";
}

.mdi-book-minus::before {
  content: "\\F5D9";
}

.mdi-book-minus-multiple::before {
  content: "\\FA93";
}

.mdi-book-multiple::before {
  content: "\\F0BB";
}

.mdi-book-open::before {
  content: "\\F0BD";
}

.mdi-book-open-outline::before {
  content: "\\FB3F";
}

.mdi-book-open-page-variant::before {
  content: "\\F5DA";
}

.mdi-book-open-variant::before {
  content: "\\F0BE";
}

.mdi-book-outline::before {
  content: "\\FB40";
}

.mdi-book-play::before {
  content: "\\FE9F";
}

.mdi-book-play-outline::before {
  content: "\\FEA0";
}

.mdi-book-plus::before {
  content: "\\F5DB";
}

.mdi-book-plus-multiple::before {
  content: "\\FA94";
}

.mdi-book-remove::before {
  content: "\\FA96";
}

.mdi-book-remove-multiple::before {
  content: "\\FA95";
}

.mdi-book-search::before {
  content: "\\FEA1";
}

.mdi-book-search-outline::before {
  content: "\\FEA2";
}

.mdi-book-variant::before {
  content: "\\F0BF";
}

.mdi-book-variant-multiple::before {
  content: "\\F0BC";
}

.mdi-bookmark::before {
  content: "\\F0C0";
}

.mdi-bookmark-check::before {
  content: "\\F0C1";
}

.mdi-bookmark-minus::before {
  content: "\\F9CB";
}

.mdi-bookmark-minus-outline::before {
  content: "\\F9CC";
}

.mdi-bookmark-multiple::before {
  content: "\\FDF8";
}

.mdi-bookmark-multiple-outline::before {
  content: "\\FDF9";
}

.mdi-bookmark-music::before {
  content: "\\F0C2";
}

.mdi-bookmark-off::before {
  content: "\\F9CD";
}

.mdi-bookmark-off-outline::before {
  content: "\\F9CE";
}

.mdi-bookmark-outline::before {
  content: "\\F0C3";
}

.mdi-bookmark-plus::before {
  content: "\\F0C5";
}

.mdi-bookmark-plus-outline::before {
  content: "\\F0C4";
}

.mdi-bookmark-remove::before {
  content: "\\F0C6";
}

.mdi-bookshelf::before {
  content: "\\F028A";
}

.mdi-boom-gate::before {
  content: "\\FEA3";
}

.mdi-boom-gate-alert::before {
  content: "\\FEA4";
}

.mdi-boom-gate-alert-outline::before {
  content: "\\FEA5";
}

.mdi-boom-gate-down::before {
  content: "\\FEA6";
}

.mdi-boom-gate-down-outline::before {
  content: "\\FEA7";
}

.mdi-boom-gate-outline::before {
  content: "\\FEA8";
}

.mdi-boom-gate-up::before {
  content: "\\FEA9";
}

.mdi-boom-gate-up-outline::before {
  content: "\\FEAA";
}

.mdi-boombox::before {
  content: "\\F5DC";
}

.mdi-boomerang::before {
  content: "\\F00FA";
}

.mdi-bootstrap::before {
  content: "\\F6C5";
}

.mdi-border-all::before {
  content: "\\F0C7";
}

.mdi-border-all-variant::before {
  content: "\\F8A0";
}

.mdi-border-bottom::before {
  content: "\\F0C8";
}

.mdi-border-bottom-variant::before {
  content: "\\F8A1";
}

.mdi-border-color::before {
  content: "\\F0C9";
}

.mdi-border-horizontal::before {
  content: "\\F0CA";
}

.mdi-border-inside::before {
  content: "\\F0CB";
}

.mdi-border-left::before {
  content: "\\F0CC";
}

.mdi-border-left-variant::before {
  content: "\\F8A2";
}

.mdi-border-none::before {
  content: "\\F0CD";
}

.mdi-border-none-variant::before {
  content: "\\F8A3";
}

.mdi-border-outside::before {
  content: "\\F0CE";
}

.mdi-border-right::before {
  content: "\\F0CF";
}

.mdi-border-right-variant::before {
  content: "\\F8A4";
}

.mdi-border-style::before {
  content: "\\F0D0";
}

.mdi-border-top::before {
  content: "\\F0D1";
}

.mdi-border-top-variant::before {
  content: "\\F8A5";
}

.mdi-border-vertical::before {
  content: "\\F0D2";
}

.mdi-bottle-soda::before {
  content: "\\F009B";
}

.mdi-bottle-soda-classic::before {
  content: "\\F009C";
}

.mdi-bottle-soda-outline::before {
  content: "\\F009D";
}

.mdi-bottle-tonic::before {
  content: "\\F0159";
}

.mdi-bottle-tonic-outline::before {
  content: "\\F015A";
}

.mdi-bottle-tonic-plus::before {
  content: "\\F015B";
}

.mdi-bottle-tonic-plus-outline::before {
  content: "\\F015C";
}

.mdi-bottle-tonic-skull::before {
  content: "\\F015D";
}

.mdi-bottle-tonic-skull-outline::before {
  content: "\\F015E";
}

.mdi-bottle-wine::before {
  content: "\\F853";
}

.mdi-bottle-wine-outline::before {
  content: "\\F033B";
}

.mdi-bow-tie::before {
  content: "\\F677";
}

.mdi-bowl::before {
  content: "\\F617";
}

.mdi-bowling::before {
  content: "\\F0D3";
}

.mdi-box::before {
  content: "\\F0D4";
}

.mdi-box-cutter::before {
  content: "\\F0D5";
}

.mdi-box-shadow::before {
  content: "\\F637";
}

.mdi-boxing-glove::before {
  content: "\\FB41";
}

.mdi-braille::before {
  content: "\\F9CF";
}

.mdi-brain::before {
  content: "\\F9D0";
}

.mdi-bread-slice::before {
  content: "\\FCCA";
}

.mdi-bread-slice-outline::before {
  content: "\\FCCB";
}

.mdi-bridge::before {
  content: "\\F618";
}

.mdi-briefcase::before {
  content: "\\F0D6";
}

.mdi-briefcase-account::before {
  content: "\\FCCC";
}

.mdi-briefcase-account-outline::before {
  content: "\\FCCD";
}

.mdi-briefcase-check::before {
  content: "\\F0D7";
}

.mdi-briefcase-check-outline::before {
  content: "\\F0349";
}

.mdi-briefcase-clock::before {
  content: "\\F00FB";
}

.mdi-briefcase-clock-outline::before {
  content: "\\F00FC";
}

.mdi-briefcase-download::before {
  content: "\\F0D8";
}

.mdi-briefcase-download-outline::before {
  content: "\\FC19";
}

.mdi-briefcase-edit::before {
  content: "\\FA97";
}

.mdi-briefcase-edit-outline::before {
  content: "\\FC1A";
}

.mdi-briefcase-minus::before {
  content: "\\FA29";
}

.mdi-briefcase-minus-outline::before {
  content: "\\FC1B";
}

.mdi-briefcase-outline::before {
  content: "\\F813";
}

.mdi-briefcase-plus::before {
  content: "\\FA2A";
}

.mdi-briefcase-plus-outline::before {
  content: "\\FC1C";
}

.mdi-briefcase-remove::before {
  content: "\\FA2B";
}

.mdi-briefcase-remove-outline::before {
  content: "\\FC1D";
}

.mdi-briefcase-search::before {
  content: "\\FA2C";
}

.mdi-briefcase-search-outline::before {
  content: "\\FC1E";
}

.mdi-briefcase-upload::before {
  content: "\\F0D9";
}

.mdi-briefcase-upload-outline::before {
  content: "\\FC1F";
}

.mdi-brightness-1::before {
  content: "\\F0DA";
}

.mdi-brightness-2::before {
  content: "\\F0DB";
}

.mdi-brightness-3::before {
  content: "\\F0DC";
}

.mdi-brightness-4::before {
  content: "\\F0DD";
}

.mdi-brightness-5::before {
  content: "\\F0DE";
}

.mdi-brightness-6::before {
  content: "\\F0DF";
}

.mdi-brightness-7::before {
  content: "\\F0E0";
}

.mdi-brightness-auto::before {
  content: "\\F0E1";
}

.mdi-brightness-percent::before {
  content: "\\FCCE";
}

.mdi-broom::before {
  content: "\\F0E2";
}

.mdi-brush::before {
  content: "\\F0E3";
}

.mdi-buddhism::before {
  content: "\\F94A";
}

.mdi-buffer::before {
  content: "\\F619";
}

.mdi-bug::before {
  content: "\\F0E4";
}

.mdi-bug-check::before {
  content: "\\FA2D";
}

.mdi-bug-check-outline::before {
  content: "\\FA2E";
}

.mdi-bug-outline::before {
  content: "\\FA2F";
}

.mdi-bugle::before {
  content: "\\FD90";
}

.mdi-bulldozer::before {
  content: "\\FB07";
}

.mdi-bullet::before {
  content: "\\FCCF";
}

.mdi-bulletin-board::before {
  content: "\\F0E5";
}

.mdi-bullhorn::before {
  content: "\\F0E6";
}

.mdi-bullhorn-outline::before {
  content: "\\FB08";
}

.mdi-bullseye::before {
  content: "\\F5DD";
}

.mdi-bullseye-arrow::before {
  content: "\\F8C8";
}

.mdi-bulma::before {
  content: "\\F0312";
}

.mdi-bunk-bed::before {
  content: "\\F032D";
}

.mdi-bus::before {
  content: "\\F0E7";
}

.mdi-bus-alert::before {
  content: "\\FA98";
}

.mdi-bus-articulated-end::before {
  content: "\\F79B";
}

.mdi-bus-articulated-front::before {
  content: "\\F79C";
}

.mdi-bus-clock::before {
  content: "\\F8C9";
}

.mdi-bus-double-decker::before {
  content: "\\F79D";
}

.mdi-bus-marker::before {
  content: "\\F023D";
}

.mdi-bus-multiple::before {
  content: "\\FF5C";
}

.mdi-bus-school::before {
  content: "\\F79E";
}

.mdi-bus-side::before {
  content: "\\F79F";
}

.mdi-bus-stop::before {
  content: "\\F0034";
}

.mdi-bus-stop-covered::before {
  content: "\\F0035";
}

.mdi-bus-stop-uncovered::before {
  content: "\\F0036";
}

.mdi-cached::before {
  content: "\\F0E8";
}

.mdi-cactus::before {
  content: "\\FD91";
}

.mdi-cake::before {
  content: "\\F0E9";
}

.mdi-cake-layered::before {
  content: "\\F0EA";
}

.mdi-cake-variant::before {
  content: "\\F0EB";
}

.mdi-calculator::before {
  content: "\\F0EC";
}

.mdi-calculator-variant::before {
  content: "\\FA99";
}

.mdi-calendar::before {
  content: "\\F0ED";
}

.mdi-calendar-account::before {
  content: "\\FEF4";
}

.mdi-calendar-account-outline::before {
  content: "\\FEF5";
}

.mdi-calendar-alert::before {
  content: "\\FA30";
}

.mdi-calendar-arrow-left::before {
  content: "\\F015F";
}

.mdi-calendar-arrow-right::before {
  content: "\\F0160";
}

.mdi-calendar-blank::before {
  content: "\\F0EE";
}

.mdi-calendar-blank-multiple::before {
  content: "\\F009E";
}

.mdi-calendar-blank-outline::before {
  content: "\\FB42";
}

.mdi-calendar-check::before {
  content: "\\F0EF";
}

.mdi-calendar-check-outline::before {
  content: "\\FC20";
}

.mdi-calendar-clock::before {
  content: "\\F0F0";
}

.mdi-calendar-edit::before {
  content: "\\F8A6";
}

.mdi-calendar-export::before {
  content: "\\FB09";
}

.mdi-calendar-heart::before {
  content: "\\F9D1";
}

.mdi-calendar-import::before {
  content: "\\FB0A";
}

.mdi-calendar-minus::before {
  content: "\\FD38";
}

.mdi-calendar-month::before {
  content: "\\FDFA";
}

.mdi-calendar-month-outline::before {
  content: "\\FDFB";
}

.mdi-calendar-multiple::before {
  content: "\\F0F1";
}

.mdi-calendar-multiple-check::before {
  content: "\\F0F2";
}

.mdi-calendar-multiselect::before {
  content: "\\FA31";
}

.mdi-calendar-outline::before {
  content: "\\FB43";
}

.mdi-calendar-plus::before {
  content: "\\F0F3";
}

.mdi-calendar-question::before {
  content: "\\F691";
}

.mdi-calendar-range::before {
  content: "\\F678";
}

.mdi-calendar-range-outline::before {
  content: "\\FB44";
}

.mdi-calendar-remove::before {
  content: "\\F0F4";
}

.mdi-calendar-remove-outline::before {
  content: "\\FC21";
}

.mdi-calendar-repeat::before {
  content: "\\FEAB";
}

.mdi-calendar-repeat-outline::before {
  content: "\\FEAC";
}

.mdi-calendar-search::before {
  content: "\\F94B";
}

.mdi-calendar-star::before {
  content: "\\F9D2";
}

.mdi-calendar-text::before {
  content: "\\F0F5";
}

.mdi-calendar-text-outline::before {
  content: "\\FC22";
}

.mdi-calendar-today::before {
  content: "\\F0F6";
}

.mdi-calendar-week::before {
  content: "\\FA32";
}

.mdi-calendar-week-begin::before {
  content: "\\FA33";
}

.mdi-calendar-weekend::before {
  content: "\\FEF6";
}

.mdi-calendar-weekend-outline::before {
  content: "\\FEF7";
}

.mdi-call-made::before {
  content: "\\F0F7";
}

.mdi-call-merge::before {
  content: "\\F0F8";
}

.mdi-call-missed::before {
  content: "\\F0F9";
}

.mdi-call-received::before {
  content: "\\F0FA";
}

.mdi-call-split::before {
  content: "\\F0FB";
}

.mdi-camcorder::before {
  content: "\\F0FC";
}

.mdi-camcorder-box::before {
  content: "\\F0FD";
}

.mdi-camcorder-box-off::before {
  content: "\\F0FE";
}

.mdi-camcorder-off::before {
  content: "\\F0FF";
}

.mdi-camera::before {
  content: "\\F100";
}

.mdi-camera-account::before {
  content: "\\F8CA";
}

.mdi-camera-burst::before {
  content: "\\F692";
}

.mdi-camera-control::before {
  content: "\\FB45";
}

.mdi-camera-enhance::before {
  content: "\\F101";
}

.mdi-camera-enhance-outline::before {
  content: "\\FB46";
}

.mdi-camera-front::before {
  content: "\\F102";
}

.mdi-camera-front-variant::before {
  content: "\\F103";
}

.mdi-camera-gopro::before {
  content: "\\F7A0";
}

.mdi-camera-image::before {
  content: "\\F8CB";
}

.mdi-camera-iris::before {
  content: "\\F104";
}

.mdi-camera-metering-center::before {
  content: "\\F7A1";
}

.mdi-camera-metering-matrix::before {
  content: "\\F7A2";
}

.mdi-camera-metering-partial::before {
  content: "\\F7A3";
}

.mdi-camera-metering-spot::before {
  content: "\\F7A4";
}

.mdi-camera-off::before {
  content: "\\F5DF";
}

.mdi-camera-outline::before {
  content: "\\FD39";
}

.mdi-camera-party-mode::before {
  content: "\\F105";
}

.mdi-camera-plus::before {
  content: "\\FEF8";
}

.mdi-camera-plus-outline::before {
  content: "\\FEF9";
}

.mdi-camera-rear::before {
  content: "\\F106";
}

.mdi-camera-rear-variant::before {
  content: "\\F107";
}

.mdi-camera-retake::before {
  content: "\\FDFC";
}

.mdi-camera-retake-outline::before {
  content: "\\FDFD";
}

.mdi-camera-switch::before {
  content: "\\F108";
}

.mdi-camera-timer::before {
  content: "\\F109";
}

.mdi-camera-wireless::before {
  content: "\\FD92";
}

.mdi-camera-wireless-outline::before {
  content: "\\FD93";
}

.mdi-campfire::before {
  content: "\\FEFA";
}

.mdi-cancel::before {
  content: "\\F739";
}

.mdi-candle::before {
  content: "\\F5E2";
}

.mdi-candycane::before {
  content: "\\F10A";
}

.mdi-cannabis::before {
  content: "\\F7A5";
}

.mdi-caps-lock::before {
  content: "\\FA9A";
}

.mdi-car::before {
  content: "\\F10B";
}

.mdi-car-2-plus::before {
  content: "\\F0037";
}

.mdi-car-3-plus::before {
  content: "\\F0038";
}

.mdi-car-back::before {
  content: "\\FDFE";
}

.mdi-car-battery::before {
  content: "\\F10C";
}

.mdi-car-brake-abs::before {
  content: "\\FC23";
}

.mdi-car-brake-alert::before {
  content: "\\FC24";
}

.mdi-car-brake-hold::before {
  content: "\\FD3A";
}

.mdi-car-brake-parking::before {
  content: "\\FD3B";
}

.mdi-car-brake-retarder::before {
  content: "\\F0039";
}

.mdi-car-child-seat::before {
  content: "\\FFC3";
}

.mdi-car-clutch::before {
  content: "\\F003A";
}

.mdi-car-connected::before {
  content: "\\F10D";
}

.mdi-car-convertible::before {
  content: "\\F7A6";
}

.mdi-car-coolant-level::before {
  content: "\\F003B";
}

.mdi-car-cruise-control::before {
  content: "\\FD3C";
}

.mdi-car-defrost-front::before {
  content: "\\FD3D";
}

.mdi-car-defrost-rear::before {
  content: "\\FD3E";
}

.mdi-car-door::before {
  content: "\\FB47";
}

.mdi-car-door-lock::before {
  content: "\\F00C8";
}

.mdi-car-electric::before {
  content: "\\FB48";
}

.mdi-car-esp::before {
  content: "\\FC25";
}

.mdi-car-estate::before {
  content: "\\F7A7";
}

.mdi-car-hatchback::before {
  content: "\\F7A8";
}

.mdi-car-info::before {
  content: "\\F01E9";
}

.mdi-car-key::before {
  content: "\\FB49";
}

.mdi-car-light-dimmed::before {
  content: "\\FC26";
}

.mdi-car-light-fog::before {
  content: "\\FC27";
}

.mdi-car-light-high::before {
  content: "\\FC28";
}

.mdi-car-limousine::before {
  content: "\\F8CC";
}

.mdi-car-multiple::before {
  content: "\\FB4A";
}

.mdi-car-off::before {
  content: "\\FDFF";
}

.mdi-car-parking-lights::before {
  content: "\\FD3F";
}

.mdi-car-pickup::before {
  content: "\\F7A9";
}

.mdi-car-seat::before {
  content: "\\FFC4";
}

.mdi-car-seat-cooler::before {
  content: "\\FFC5";
}

.mdi-car-seat-heater::before {
  content: "\\FFC6";
}

.mdi-car-shift-pattern::before {
  content: "\\FF5D";
}

.mdi-car-side::before {
  content: "\\F7AA";
}

.mdi-car-sports::before {
  content: "\\F7AB";
}

.mdi-car-tire-alert::before {
  content: "\\FC29";
}

.mdi-car-traction-control::before {
  content: "\\FD40";
}

.mdi-car-turbocharger::before {
  content: "\\F003C";
}

.mdi-car-wash::before {
  content: "\\F10E";
}

.mdi-car-windshield::before {
  content: "\\F003D";
}

.mdi-car-windshield-outline::before {
  content: "\\F003E";
}

.mdi-caravan::before {
  content: "\\F7AC";
}

.mdi-card::before {
  content: "\\FB4B";
}

.mdi-card-bulleted::before {
  content: "\\FB4C";
}

.mdi-card-bulleted-off::before {
  content: "\\FB4D";
}

.mdi-card-bulleted-off-outline::before {
  content: "\\FB4E";
}

.mdi-card-bulleted-outline::before {
  content: "\\FB4F";
}

.mdi-card-bulleted-settings::before {
  content: "\\FB50";
}

.mdi-card-bulleted-settings-outline::before {
  content: "\\FB51";
}

.mdi-card-outline::before {
  content: "\\FB52";
}

.mdi-card-plus::before {
  content: "\\F022A";
}

.mdi-card-plus-outline::before {
  content: "\\F022B";
}

.mdi-card-search::before {
  content: "\\F009F";
}

.mdi-card-search-outline::before {
  content: "\\F00A0";
}

.mdi-card-text::before {
  content: "\\FB53";
}

.mdi-card-text-outline::before {
  content: "\\FB54";
}

.mdi-cards::before {
  content: "\\F638";
}

.mdi-cards-club::before {
  content: "\\F8CD";
}

.mdi-cards-diamond::before {
  content: "\\F8CE";
}

.mdi-cards-diamond-outline::before {
  content: "\\F003F";
}

.mdi-cards-heart::before {
  content: "\\F8CF";
}

.mdi-cards-outline::before {
  content: "\\F639";
}

.mdi-cards-playing-outline::before {
  content: "\\F63A";
}

.mdi-cards-spade::before {
  content: "\\F8D0";
}

.mdi-cards-variant::before {
  content: "\\F6C6";
}

.mdi-carrot::before {
  content: "\\F10F";
}

.mdi-cart::before {
  content: "\\F110";
}

.mdi-cart-arrow-down::before {
  content: "\\FD42";
}

.mdi-cart-arrow-right::before {
  content: "\\FC2A";
}

.mdi-cart-arrow-up::before {
  content: "\\FD43";
}

.mdi-cart-minus::before {
  content: "\\FD44";
}

.mdi-cart-off::before {
  content: "\\F66B";
}

.mdi-cart-outline::before {
  content: "\\F111";
}

.mdi-cart-plus::before {
  content: "\\F112";
}

.mdi-cart-remove::before {
  content: "\\FD45";
}

.mdi-case-sensitive-alt::before {
  content: "\\F113";
}

.mdi-cash::before {
  content: "\\F114";
}

.mdi-cash-100::before {
  content: "\\F115";
}

.mdi-cash-marker::before {
  content: "\\FD94";
}

.mdi-cash-minus::before {
  content: "\\F028B";
}

.mdi-cash-multiple::before {
  content: "\\F116";
}

.mdi-cash-plus::before {
  content: "\\F028C";
}

.mdi-cash-refund::before {
  content: "\\FA9B";
}

.mdi-cash-register::before {
  content: "\\FCD0";
}

.mdi-cash-remove::before {
  content: "\\F028D";
}

.mdi-cash-usd::before {
  content: "\\F01A1";
}

.mdi-cash-usd-outline::before {
  content: "\\F117";
}

.mdi-cassette::before {
  content: "\\F9D3";
}

.mdi-cast::before {
  content: "\\F118";
}

.mdi-cast-audio::before {
  content: "\\F0040";
}

.mdi-cast-connected::before {
  content: "\\F119";
}

.mdi-cast-education::before {
  content: "\\FE6D";
}

.mdi-cast-off::before {
  content: "\\F789";
}

.mdi-castle::before {
  content: "\\F11A";
}

.mdi-cat::before {
  content: "\\F11B";
}

.mdi-cctv::before {
  content: "\\F7AD";
}

.mdi-ceiling-light::before {
  content: "\\F768";
}

.mdi-cellphone::before {
  content: "\\F11C";
}

.mdi-cellphone-android::before {
  content: "\\F11D";
}

.mdi-cellphone-arrow-down::before {
  content: "\\F9D4";
}

.mdi-cellphone-basic::before {
  content: "\\F11E";
}

.mdi-cellphone-dock::before {
  content: "\\F11F";
}

.mdi-cellphone-erase::before {
  content: "\\F94C";
}

.mdi-cellphone-information::before {
  content: "\\FF5E";
}

.mdi-cellphone-iphone::before {
  content: "\\F120";
}

.mdi-cellphone-key::before {
  content: "\\F94D";
}

.mdi-cellphone-link::before {
  content: "\\F121";
}

.mdi-cellphone-link-off::before {
  content: "\\F122";
}

.mdi-cellphone-lock::before {
  content: "\\F94E";
}

.mdi-cellphone-message::before {
  content: "\\F8D2";
}

.mdi-cellphone-message-off::before {
  content: "\\F00FD";
}

.mdi-cellphone-nfc::before {
  content: "\\FEAD";
}

.mdi-cellphone-nfc-off::before {
  content: "\\F0303";
}

.mdi-cellphone-off::before {
  content: "\\F94F";
}

.mdi-cellphone-play::before {
  content: "\\F0041";
}

.mdi-cellphone-screenshot::before {
  content: "\\FA34";
}

.mdi-cellphone-settings::before {
  content: "\\F123";
}

.mdi-cellphone-settings-variant::before {
  content: "\\F950";
}

.mdi-cellphone-sound::before {
  content: "\\F951";
}

.mdi-cellphone-text::before {
  content: "\\F8D1";
}

.mdi-cellphone-wireless::before {
  content: "\\F814";
}

.mdi-celtic-cross::before {
  content: "\\FCD1";
}

.mdi-centos::before {
  content: "\\F0145";
}

.mdi-certificate::before {
  content: "\\F124";
}

.mdi-certificate-outline::before {
  content: "\\F01B3";
}

.mdi-chair-rolling::before {
  content: "\\FFBA";
}

.mdi-chair-school::before {
  content: "\\F125";
}

.mdi-charity::before {
  content: "\\FC2B";
}

.mdi-chart-arc::before {
  content: "\\F126";
}

.mdi-chart-areaspline::before {
  content: "\\F127";
}

.mdi-chart-areaspline-variant::before {
  content: "\\FEAE";
}

.mdi-chart-bar::before {
  content: "\\F128";
}

.mdi-chart-bar-stacked::before {
  content: "\\F769";
}

.mdi-chart-bell-curve::before {
  content: "\\FC2C";
}

.mdi-chart-bell-curve-cumulative::before {
  content: "\\FFC7";
}

.mdi-chart-bubble::before {
  content: "\\F5E3";
}

.mdi-chart-donut::before {
  content: "\\F7AE";
}

.mdi-chart-donut-variant::before {
  content: "\\F7AF";
}

.mdi-chart-gantt::before {
  content: "\\F66C";
}

.mdi-chart-histogram::before {
  content: "\\F129";
}

.mdi-chart-line::before {
  content: "\\F12A";
}

.mdi-chart-line-stacked::before {
  content: "\\F76A";
}

.mdi-chart-line-variant::before {
  content: "\\F7B0";
}

.mdi-chart-multiline::before {
  content: "\\F8D3";
}

.mdi-chart-multiple::before {
  content: "\\F023E";
}

.mdi-chart-pie::before {
  content: "\\F12B";
}

.mdi-chart-scatter-plot::before {
  content: "\\FEAF";
}

.mdi-chart-scatter-plot-hexbin::before {
  content: "\\F66D";
}

.mdi-chart-snakey::before {
  content: "\\F020A";
}

.mdi-chart-snakey-variant::before {
  content: "\\F020B";
}

.mdi-chart-timeline::before {
  content: "\\F66E";
}

.mdi-chart-timeline-variant::before {
  content: "\\FEB0";
}

.mdi-chart-tree::before {
  content: "\\FEB1";
}

.mdi-chat::before {
  content: "\\FB55";
}

.mdi-chat-alert::before {
  content: "\\FB56";
}

.mdi-chat-alert-outline::before {
  content: "\\F02F4";
}

.mdi-chat-outline::before {
  content: "\\FEFB";
}

.mdi-chat-processing::before {
  content: "\\FB57";
}

.mdi-chat-processing-outline::before {
  content: "\\F02F5";
}

.mdi-chat-sleep::before {
  content: "\\F02FC";
}

.mdi-chat-sleep-outline::before {
  content: "\\F02FD";
}

.mdi-check::before {
  content: "\\F12C";
}

.mdi-check-all::before {
  content: "\\F12D";
}

.mdi-check-bold::before {
  content: "\\FE6E";
}

.mdi-check-box-multiple-outline::before {
  content: "\\FC2D";
}

.mdi-check-box-outline::before {
  content: "\\FC2E";
}

.mdi-check-circle::before {
  content: "\\F5E0";
}

.mdi-check-circle-outline::before {
  content: "\\F5E1";
}

.mdi-check-decagram::before {
  content: "\\F790";
}

.mdi-check-network::before {
  content: "\\FC2F";
}

.mdi-check-network-outline::before {
  content: "\\FC30";
}

.mdi-check-outline::before {
  content: "\\F854";
}

.mdi-check-underline::before {
  content: "\\FE70";
}

.mdi-check-underline-circle::before {
  content: "\\FE71";
}

.mdi-check-underline-circle-outline::before {
  content: "\\FE72";
}

.mdi-checkbook::before {
  content: "\\FA9C";
}

.mdi-checkbox-blank::before {
  content: "\\F12E";
}

.mdi-checkbox-blank-circle::before {
  content: "\\F12F";
}

.mdi-checkbox-blank-circle-outline::before {
  content: "\\F130";
}

.mdi-checkbox-blank-off::before {
  content: "\\F0317";
}

.mdi-checkbox-blank-off-outline::before {
  content: "\\F0318";
}

.mdi-checkbox-blank-outline::before {
  content: "\\F131";
}

.mdi-checkbox-intermediate::before {
  content: "\\F855";
}

.mdi-checkbox-marked::before {
  content: "\\F132";
}

.mdi-checkbox-marked-circle::before {
  content: "\\F133";
}

.mdi-checkbox-marked-circle-outline::before {
  content: "\\F134";
}

.mdi-checkbox-marked-outline::before {
  content: "\\F135";
}

.mdi-checkbox-multiple-blank::before {
  content: "\\F136";
}

.mdi-checkbox-multiple-blank-circle::before {
  content: "\\F63B";
}

.mdi-checkbox-multiple-blank-circle-outline::before {
  content: "\\F63C";
}

.mdi-checkbox-multiple-blank-outline::before {
  content: "\\F137";
}

.mdi-checkbox-multiple-marked::before {
  content: "\\F138";
}

.mdi-checkbox-multiple-marked-circle::before {
  content: "\\F63D";
}

.mdi-checkbox-multiple-marked-circle-outline::before {
  content: "\\F63E";
}

.mdi-checkbox-multiple-marked-outline::before {
  content: "\\F139";
}

.mdi-checkerboard::before {
  content: "\\F13A";
}

.mdi-checkerboard-minus::before {
  content: "\\F022D";
}

.mdi-checkerboard-plus::before {
  content: "\\F022C";
}

.mdi-checkerboard-remove::before {
  content: "\\F022E";
}

.mdi-cheese::before {
  content: "\\F02E4";
}

.mdi-chef-hat::before {
  content: "\\FB58";
}

.mdi-chemical-weapon::before {
  content: "\\F13B";
}

.mdi-chess-bishop::before {
  content: "\\F85B";
}

.mdi-chess-king::before {
  content: "\\F856";
}

.mdi-chess-knight::before {
  content: "\\F857";
}

.mdi-chess-pawn::before {
  content: "\\F858";
}

.mdi-chess-queen::before {
  content: "\\F859";
}

.mdi-chess-rook::before {
  content: "\\F85A";
}

.mdi-chevron-double-down::before {
  content: "\\F13C";
}

.mdi-chevron-double-left::before {
  content: "\\F13D";
}

.mdi-chevron-double-right::before {
  content: "\\F13E";
}

.mdi-chevron-double-up::before {
  content: "\\F13F";
}

.mdi-chevron-down::before {
  content: "\\F140";
}

.mdi-chevron-down-box::before {
  content: "\\F9D5";
}

.mdi-chevron-down-box-outline::before {
  content: "\\F9D6";
}

.mdi-chevron-down-circle::before {
  content: "\\FB0B";
}

.mdi-chevron-down-circle-outline::before {
  content: "\\FB0C";
}

.mdi-chevron-left::before {
  content: "\\F141";
}

.mdi-chevron-left-box::before {
  content: "\\F9D7";
}

.mdi-chevron-left-box-outline::before {
  content: "\\F9D8";
}

.mdi-chevron-left-circle::before {
  content: "\\FB0D";
}

.mdi-chevron-left-circle-outline::before {
  content: "\\FB0E";
}

.mdi-chevron-right::before {
  content: "\\F142";
}

.mdi-chevron-right-box::before {
  content: "\\F9D9";
}

.mdi-chevron-right-box-outline::before {
  content: "\\F9DA";
}

.mdi-chevron-right-circle::before {
  content: "\\FB0F";
}

.mdi-chevron-right-circle-outline::before {
  content: "\\FB10";
}

.mdi-chevron-triple-down::before {
  content: "\\FD95";
}

.mdi-chevron-triple-left::before {
  content: "\\FD96";
}

.mdi-chevron-triple-right::before {
  content: "\\FD97";
}

.mdi-chevron-triple-up::before {
  content: "\\FD98";
}

.mdi-chevron-up::before {
  content: "\\F143";
}

.mdi-chevron-up-box::before {
  content: "\\F9DB";
}

.mdi-chevron-up-box-outline::before {
  content: "\\F9DC";
}

.mdi-chevron-up-circle::before {
  content: "\\FB11";
}

.mdi-chevron-up-circle-outline::before {
  content: "\\FB12";
}

.mdi-chili-hot::before {
  content: "\\F7B1";
}

.mdi-chili-medium::before {
  content: "\\F7B2";
}

.mdi-chili-mild::before {
  content: "\\F7B3";
}

.mdi-chip::before {
  content: "\\F61A";
}

.mdi-christianity::before {
  content: "\\F952";
}

.mdi-christianity-outline::before {
  content: "\\FCD2";
}

.mdi-church::before {
  content: "\\F144";
}

.mdi-cigar::before {
  content: "\\F01B4";
}

.mdi-circle::before {
  content: "\\F764";
}

.mdi-circle-double::before {
  content: "\\FEB2";
}

.mdi-circle-edit-outline::before {
  content: "\\F8D4";
}

.mdi-circle-expand::before {
  content: "\\FEB3";
}

.mdi-circle-medium::before {
  content: "\\F9DD";
}

.mdi-circle-off-outline::before {
  content: "\\F00FE";
}

.mdi-circle-outline::before {
  content: "\\F765";
}

.mdi-circle-slice-1::before {
  content: "\\FA9D";
}

.mdi-circle-slice-2::before {
  content: "\\FA9E";
}

.mdi-circle-slice-3::before {
  content: "\\FA9F";
}

.mdi-circle-slice-4::before {
  content: "\\FAA0";
}

.mdi-circle-slice-5::before {
  content: "\\FAA1";
}

.mdi-circle-slice-6::before {
  content: "\\FAA2";
}

.mdi-circle-slice-7::before {
  content: "\\FAA3";
}

.mdi-circle-slice-8::before {
  content: "\\FAA4";
}

.mdi-circle-small::before {
  content: "\\F9DE";
}

.mdi-circular-saw::before {
  content: "\\FE73";
}

.mdi-cisco-webex::before {
  content: "\\F145";
}

.mdi-city::before {
  content: "\\F146";
}

.mdi-city-variant::before {
  content: "\\FA35";
}

.mdi-city-variant-outline::before {
  content: "\\FA36";
}

.mdi-clipboard::before {
  content: "\\F147";
}

.mdi-clipboard-account::before {
  content: "\\F148";
}

.mdi-clipboard-account-outline::before {
  content: "\\FC31";
}

.mdi-clipboard-alert::before {
  content: "\\F149";
}

.mdi-clipboard-alert-outline::before {
  content: "\\FCD3";
}

.mdi-clipboard-arrow-down::before {
  content: "\\F14A";
}

.mdi-clipboard-arrow-down-outline::before {
  content: "\\FC32";
}

.mdi-clipboard-arrow-left::before {
  content: "\\F14B";
}

.mdi-clipboard-arrow-left-outline::before {
  content: "\\FCD4";
}

.mdi-clipboard-arrow-right::before {
  content: "\\FCD5";
}

.mdi-clipboard-arrow-right-outline::before {
  content: "\\FCD6";
}

.mdi-clipboard-arrow-up::before {
  content: "\\FC33";
}

.mdi-clipboard-arrow-up-outline::before {
  content: "\\FC34";
}

.mdi-clipboard-check::before {
  content: "\\F14C";
}

.mdi-clipboard-check-multiple::before {
  content: "\\F028E";
}

.mdi-clipboard-check-multiple-outline::before {
  content: "\\F028F";
}

.mdi-clipboard-check-outline::before {
  content: "\\F8A7";
}

.mdi-clipboard-file::before {
  content: "\\F0290";
}

.mdi-clipboard-file-outline::before {
  content: "\\F0291";
}

.mdi-clipboard-flow::before {
  content: "\\F6C7";
}

.mdi-clipboard-flow-outline::before {
  content: "\\F0142";
}

.mdi-clipboard-list::before {
  content: "\\F00FF";
}

.mdi-clipboard-list-outline::before {
  content: "\\F0100";
}

.mdi-clipboard-multiple::before {
  content: "\\F0292";
}

.mdi-clipboard-multiple-outline::before {
  content: "\\F0293";
}

.mdi-clipboard-outline::before {
  content: "\\F14D";
}

.mdi-clipboard-play::before {
  content: "\\FC35";
}

.mdi-clipboard-play-multiple::before {
  content: "\\F0294";
}

.mdi-clipboard-play-multiple-outline::before {
  content: "\\F0295";
}

.mdi-clipboard-play-outline::before {
  content: "\\FC36";
}

.mdi-clipboard-plus::before {
  content: "\\F750";
}

.mdi-clipboard-plus-outline::before {
  content: "\\F034A";
}

.mdi-clipboard-pulse::before {
  content: "\\F85C";
}

.mdi-clipboard-pulse-outline::before {
  content: "\\F85D";
}

.mdi-clipboard-text::before {
  content: "\\F14E";
}

.mdi-clipboard-text-multiple::before {
  content: "\\F0296";
}

.mdi-clipboard-text-multiple-outline::before {
  content: "\\F0297";
}

.mdi-clipboard-text-outline::before {
  content: "\\FA37";
}

.mdi-clipboard-text-play::before {
  content: "\\FC37";
}

.mdi-clipboard-text-play-outline::before {
  content: "\\FC38";
}

.mdi-clippy::before {
  content: "\\F14F";
}

.mdi-clock::before {
  content: "\\F953";
}

.mdi-clock-alert::before {
  content: "\\F954";
}

.mdi-clock-alert-outline::before {
  content: "\\F5CE";
}

.mdi-clock-check::before {
  content: "\\FFC8";
}

.mdi-clock-check-outline::before {
  content: "\\FFC9";
}

.mdi-clock-digital::before {
  content: "\\FEB4";
}

.mdi-clock-end::before {
  content: "\\F151";
}

.mdi-clock-fast::before {
  content: "\\F152";
}

.mdi-clock-in::before {
  content: "\\F153";
}

.mdi-clock-out::before {
  content: "\\F154";
}

.mdi-clock-outline::before {
  content: "\\F150";
}

.mdi-clock-start::before {
  content: "\\F155";
}

.mdi-close::before {
  content: "\\F156";
}

.mdi-close-box::before {
  content: "\\F157";
}

.mdi-close-box-multiple::before {
  content: "\\FC39";
}

.mdi-close-box-multiple-outline::before {
  content: "\\FC3A";
}

.mdi-close-box-outline::before {
  content: "\\F158";
}

.mdi-close-circle::before {
  content: "\\F159";
}

.mdi-close-circle-outline::before {
  content: "\\F15A";
}

.mdi-close-network::before {
  content: "\\F15B";
}

.mdi-close-network-outline::before {
  content: "\\FC3B";
}

.mdi-close-octagon::before {
  content: "\\F15C";
}

.mdi-close-octagon-outline::before {
  content: "\\F15D";
}

.mdi-close-outline::before {
  content: "\\F6C8";
}

.mdi-closed-caption::before {
  content: "\\F15E";
}

.mdi-closed-caption-outline::before {
  content: "\\FD99";
}

.mdi-cloud::before {
  content: "\\F15F";
}

.mdi-cloud-alert::before {
  content: "\\F9DF";
}

.mdi-cloud-braces::before {
  content: "\\F7B4";
}

.mdi-cloud-check::before {
  content: "\\F160";
}

.mdi-cloud-check-outline::before {
  content: "\\F02F7";
}

.mdi-cloud-circle::before {
  content: "\\F161";
}

.mdi-cloud-download::before {
  content: "\\F162";
}

.mdi-cloud-download-outline::before {
  content: "\\FB59";
}

.mdi-cloud-lock::before {
  content: "\\F021C";
}

.mdi-cloud-lock-outline::before {
  content: "\\F021D";
}

.mdi-cloud-off-outline::before {
  content: "\\F164";
}

.mdi-cloud-outline::before {
  content: "\\F163";
}

.mdi-cloud-print::before {
  content: "\\F165";
}

.mdi-cloud-print-outline::before {
  content: "\\F166";
}

.mdi-cloud-question::before {
  content: "\\FA38";
}

.mdi-cloud-search::before {
  content: "\\F955";
}

.mdi-cloud-search-outline::before {
  content: "\\F956";
}

.mdi-cloud-sync::before {
  content: "\\F63F";
}

.mdi-cloud-sync-outline::before {
  content: "\\F0301";
}

.mdi-cloud-tags::before {
  content: "\\F7B5";
}

.mdi-cloud-upload::before {
  content: "\\F167";
}

.mdi-cloud-upload-outline::before {
  content: "\\FB5A";
}

.mdi-clover::before {
  content: "\\F815";
}

.mdi-coach-lamp::before {
  content: "\\F0042";
}

.mdi-coat-rack::before {
  content: "\\F00C9";
}

.mdi-code-array::before {
  content: "\\F168";
}

.mdi-code-braces::before {
  content: "\\F169";
}

.mdi-code-braces-box::before {
  content: "\\F0101";
}

.mdi-code-brackets::before {
  content: "\\F16A";
}

.mdi-code-equal::before {
  content: "\\F16B";
}

.mdi-code-greater-than::before {
  content: "\\F16C";
}

.mdi-code-greater-than-or-equal::before {
  content: "\\F16D";
}

.mdi-code-less-than::before {
  content: "\\F16E";
}

.mdi-code-less-than-or-equal::before {
  content: "\\F16F";
}

.mdi-code-not-equal::before {
  content: "\\F170";
}

.mdi-code-not-equal-variant::before {
  content: "\\F171";
}

.mdi-code-parentheses::before {
  content: "\\F172";
}

.mdi-code-parentheses-box::before {
  content: "\\F0102";
}

.mdi-code-string::before {
  content: "\\F173";
}

.mdi-code-tags::before {
  content: "\\F174";
}

.mdi-code-tags-check::before {
  content: "\\F693";
}

.mdi-codepen::before {
  content: "\\F175";
}

.mdi-coffee::before {
  content: "\\F176";
}

.mdi-coffee-maker::before {
  content: "\\F00CA";
}

.mdi-coffee-off::before {
  content: "\\FFCA";
}

.mdi-coffee-off-outline::before {
  content: "\\FFCB";
}

.mdi-coffee-outline::before {
  content: "\\F6C9";
}

.mdi-coffee-to-go::before {
  content: "\\F177";
}

.mdi-coffee-to-go-outline::before {
  content: "\\F0339";
}

.mdi-coffin::before {
  content: "\\FB5B";
}

.mdi-cog-clockwise::before {
  content: "\\F0208";
}

.mdi-cog-counterclockwise::before {
  content: "\\F0209";
}

.mdi-cogs::before {
  content: "\\F8D5";
}

.mdi-coin::before {
  content: "\\F0196";
}

.mdi-coin-outline::before {
  content: "\\F178";
}

.mdi-coins::before {
  content: "\\F694";
}

.mdi-collage::before {
  content: "\\F640";
}

.mdi-collapse-all::before {
  content: "\\FAA5";
}

.mdi-collapse-all-outline::before {
  content: "\\FAA6";
}

.mdi-color-helper::before {
  content: "\\F179";
}

.mdi-comma::before {
  content: "\\FE74";
}

.mdi-comma-box::before {
  content: "\\FE75";
}

.mdi-comma-box-outline::before {
  content: "\\FE76";
}

.mdi-comma-circle::before {
  content: "\\FE77";
}

.mdi-comma-circle-outline::before {
  content: "\\FE78";
}

.mdi-comment::before {
  content: "\\F17A";
}

.mdi-comment-account::before {
  content: "\\F17B";
}

.mdi-comment-account-outline::before {
  content: "\\F17C";
}

.mdi-comment-alert::before {
  content: "\\F17D";
}

.mdi-comment-alert-outline::before {
  content: "\\F17E";
}

.mdi-comment-arrow-left::before {
  content: "\\F9E0";
}

.mdi-comment-arrow-left-outline::before {
  content: "\\F9E1";
}

.mdi-comment-arrow-right::before {
  content: "\\F9E2";
}

.mdi-comment-arrow-right-outline::before {
  content: "\\F9E3";
}

.mdi-comment-check::before {
  content: "\\F17F";
}

.mdi-comment-check-outline::before {
  content: "\\F180";
}

.mdi-comment-edit::before {
  content: "\\F01EA";
}

.mdi-comment-edit-outline::before {
  content: "\\F02EF";
}

.mdi-comment-eye::before {
  content: "\\FA39";
}

.mdi-comment-eye-outline::before {
  content: "\\FA3A";
}

.mdi-comment-multiple::before {
  content: "\\F85E";
}

.mdi-comment-multiple-outline::before {
  content: "\\F181";
}

.mdi-comment-outline::before {
  content: "\\F182";
}

.mdi-comment-plus::before {
  content: "\\F9E4";
}

.mdi-comment-plus-outline::before {
  content: "\\F183";
}

.mdi-comment-processing::before {
  content: "\\F184";
}

.mdi-comment-processing-outline::before {
  content: "\\F185";
}

.mdi-comment-question::before {
  content: "\\F816";
}

.mdi-comment-question-outline::before {
  content: "\\F186";
}

.mdi-comment-quote::before {
  content: "\\F0043";
}

.mdi-comment-quote-outline::before {
  content: "\\F0044";
}

.mdi-comment-remove::before {
  content: "\\F5DE";
}

.mdi-comment-remove-outline::before {
  content: "\\F187";
}

.mdi-comment-search::before {
  content: "\\FA3B";
}

.mdi-comment-search-outline::before {
  content: "\\FA3C";
}

.mdi-comment-text::before {
  content: "\\F188";
}

.mdi-comment-text-multiple::before {
  content: "\\F85F";
}

.mdi-comment-text-multiple-outline::before {
  content: "\\F860";
}

.mdi-comment-text-outline::before {
  content: "\\F189";
}

.mdi-compare::before {
  content: "\\F18A";
}

.mdi-compass::before {
  content: "\\F18B";
}

.mdi-compass-off::before {
  content: "\\FB5C";
}

.mdi-compass-off-outline::before {
  content: "\\FB5D";
}

.mdi-compass-outline::before {
  content: "\\F18C";
}

.mdi-concourse-ci::before {
  content: "\\F00CB";
}

.mdi-console::before {
  content: "\\F18D";
}

.mdi-console-line::before {
  content: "\\F7B6";
}

.mdi-console-network::before {
  content: "\\F8A8";
}

.mdi-console-network-outline::before {
  content: "\\FC3C";
}

.mdi-consolidate::before {
  content: "\\F0103";
}

.mdi-contact-mail::before {
  content: "\\F18E";
}

.mdi-contact-mail-outline::before {
  content: "\\FEB5";
}

.mdi-contact-phone::before {
  content: "\\FEB6";
}

.mdi-contact-phone-outline::before {
  content: "\\FEB7";
}

.mdi-contactless-payment::before {
  content: "\\FD46";
}

.mdi-contacts::before {
  content: "\\F6CA";
}

.mdi-contain::before {
  content: "\\FA3D";
}

.mdi-contain-end::before {
  content: "\\FA3E";
}

.mdi-contain-start::before {
  content: "\\FA3F";
}

.mdi-content-copy::before {
  content: "\\F18F";
}

.mdi-content-cut::before {
  content: "\\F190";
}

.mdi-content-duplicate::before {
  content: "\\F191";
}

.mdi-content-paste::before {
  content: "\\F192";
}

.mdi-content-save::before {
  content: "\\F193";
}

.mdi-content-save-alert::before {
  content: "\\FF5F";
}

.mdi-content-save-alert-outline::before {
  content: "\\FF60";
}

.mdi-content-save-all::before {
  content: "\\F194";
}

.mdi-content-save-all-outline::before {
  content: "\\FF61";
}

.mdi-content-save-edit::before {
  content: "\\FCD7";
}

.mdi-content-save-edit-outline::before {
  content: "\\FCD8";
}

.mdi-content-save-move::before {
  content: "\\FE79";
}

.mdi-content-save-move-outline::before {
  content: "\\FE7A";
}

.mdi-content-save-outline::before {
  content: "\\F817";
}

.mdi-content-save-settings::before {
  content: "\\F61B";
}

.mdi-content-save-settings-outline::before {
  content: "\\FB13";
}

.mdi-contrast::before {
  content: "\\F195";
}

.mdi-contrast-box::before {
  content: "\\F196";
}

.mdi-contrast-circle::before {
  content: "\\F197";
}

.mdi-controller-classic::before {
  content: "\\FB5E";
}

.mdi-controller-classic-outline::before {
  content: "\\FB5F";
}

.mdi-cookie::before {
  content: "\\F198";
}

.mdi-coolant-temperature::before {
  content: "\\F3C8";
}

.mdi-copyright::before {
  content: "\\F5E6";
}

.mdi-cordova::before {
  content: "\\F957";
}

.mdi-corn::before {
  content: "\\F7B7";
}

.mdi-counter::before {
  content: "\\F199";
}

.mdi-cow::before {
  content: "\\F19A";
}

.mdi-cowboy::before {
  content: "\\FEB8";
}

.mdi-cpu-32-bit::before {
  content: "\\FEFC";
}

.mdi-cpu-64-bit::before {
  content: "\\FEFD";
}

.mdi-crane::before {
  content: "\\F861";
}

.mdi-creation::before {
  content: "\\F1C9";
}

.mdi-creative-commons::before {
  content: "\\FD47";
}

.mdi-credit-card::before {
  content: "\\F0010";
}

.mdi-credit-card-clock::before {
  content: "\\FEFE";
}

.mdi-credit-card-clock-outline::before {
  content: "\\FFBC";
}

.mdi-credit-card-marker::before {
  content: "\\F6A7";
}

.mdi-credit-card-marker-outline::before {
  content: "\\FD9A";
}

.mdi-credit-card-minus::before {
  content: "\\FFCC";
}

.mdi-credit-card-minus-outline::before {
  content: "\\FFCD";
}

.mdi-credit-card-multiple::before {
  content: "\\F0011";
}

.mdi-credit-card-multiple-outline::before {
  content: "\\F19C";
}

.mdi-credit-card-off::before {
  content: "\\F0012";
}

.mdi-credit-card-off-outline::before {
  content: "\\F5E4";
}

.mdi-credit-card-outline::before {
  content: "\\F19B";
}

.mdi-credit-card-plus::before {
  content: "\\F0013";
}

.mdi-credit-card-plus-outline::before {
  content: "\\F675";
}

.mdi-credit-card-refund::before {
  content: "\\F0014";
}

.mdi-credit-card-refund-outline::before {
  content: "\\FAA7";
}

.mdi-credit-card-remove::before {
  content: "\\FFCE";
}

.mdi-credit-card-remove-outline::before {
  content: "\\FFCF";
}

.mdi-credit-card-scan::before {
  content: "\\F0015";
}

.mdi-credit-card-scan-outline::before {
  content: "\\F19D";
}

.mdi-credit-card-settings::before {
  content: "\\F0016";
}

.mdi-credit-card-settings-outline::before {
  content: "\\F8D6";
}

.mdi-credit-card-wireless::before {
  content: "\\F801";
}

.mdi-credit-card-wireless-outline::before {
  content: "\\FD48";
}

.mdi-cricket::before {
  content: "\\FD49";
}

.mdi-crop::before {
  content: "\\F19E";
}

.mdi-crop-free::before {
  content: "\\F19F";
}

.mdi-crop-landscape::before {
  content: "\\F1A0";
}

.mdi-crop-portrait::before {
  content: "\\F1A1";
}

.mdi-crop-rotate::before {
  content: "\\F695";
}

.mdi-crop-square::before {
  content: "\\F1A2";
}

.mdi-crosshairs::before {
  content: "\\F1A3";
}

.mdi-crosshairs-gps::before {
  content: "\\F1A4";
}

.mdi-crosshairs-off::before {
  content: "\\FF62";
}

.mdi-crosshairs-question::before {
  content: "\\F0161";
}

.mdi-crown::before {
  content: "\\F1A5";
}

.mdi-crown-outline::before {
  content: "\\F01FB";
}

.mdi-cryengine::before {
  content: "\\F958";
}

.mdi-crystal-ball::before {
  content: "\\FB14";
}

.mdi-cube::before {
  content: "\\F1A6";
}

.mdi-cube-outline::before {
  content: "\\F1A7";
}

.mdi-cube-scan::before {
  content: "\\FB60";
}

.mdi-cube-send::before {
  content: "\\F1A8";
}

.mdi-cube-unfolded::before {
  content: "\\F1A9";
}

.mdi-cup::before {
  content: "\\F1AA";
}

.mdi-cup-off::before {
  content: "\\F5E5";
}

.mdi-cup-outline::before {
  content: "\\F033A";
}

.mdi-cup-water::before {
  content: "\\F1AB";
}

.mdi-cupboard::before {
  content: "\\FF63";
}

.mdi-cupboard-outline::before {
  content: "\\FF64";
}

.mdi-cupcake::before {
  content: "\\F959";
}

.mdi-curling::before {
  content: "\\F862";
}

.mdi-currency-bdt::before {
  content: "\\F863";
}

.mdi-currency-brl::before {
  content: "\\FB61";
}

.mdi-currency-btc::before {
  content: "\\F1AC";
}

.mdi-currency-cny::before {
  content: "\\F7B9";
}

.mdi-currency-eth::before {
  content: "\\F7BA";
}

.mdi-currency-eur::before {
  content: "\\F1AD";
}

.mdi-currency-eur-off::before {
  content: "\\F0340";
}

.mdi-currency-gbp::before {
  content: "\\F1AE";
}

.mdi-currency-ils::before {
  content: "\\FC3D";
}

.mdi-currency-inr::before {
  content: "\\F1AF";
}

.mdi-currency-jpy::before {
  content: "\\F7BB";
}

.mdi-currency-krw::before {
  content: "\\F7BC";
}

.mdi-currency-kzt::before {
  content: "\\F864";
}

.mdi-currency-ngn::before {
  content: "\\F1B0";
}

.mdi-currency-php::before {
  content: "\\F9E5";
}

.mdi-currency-rial::before {
  content: "\\FEB9";
}

.mdi-currency-rub::before {
  content: "\\F1B1";
}

.mdi-currency-sign::before {
  content: "\\F7BD";
}

.mdi-currency-try::before {
  content: "\\F1B2";
}

.mdi-currency-twd::before {
  content: "\\F7BE";
}

.mdi-currency-usd::before {
  content: "\\F1B3";
}

.mdi-currency-usd-off::before {
  content: "\\F679";
}

.mdi-current-ac::before {
  content: "\\F95A";
}

.mdi-current-dc::before {
  content: "\\F95B";
}

.mdi-cursor-default::before {
  content: "\\F1B4";
}

.mdi-cursor-default-click::before {
  content: "\\FCD9";
}

.mdi-cursor-default-click-outline::before {
  content: "\\FCDA";
}

.mdi-cursor-default-gesture::before {
  content: "\\F0152";
}

.mdi-cursor-default-gesture-outline::before {
  content: "\\F0153";
}

.mdi-cursor-default-outline::before {
  content: "\\F1B5";
}

.mdi-cursor-move::before {
  content: "\\F1B6";
}

.mdi-cursor-pointer::before {
  content: "\\F1B7";
}

.mdi-cursor-text::before {
  content: "\\F5E7";
}

.mdi-database::before {
  content: "\\F1B8";
}

.mdi-database-check::before {
  content: "\\FAA8";
}

.mdi-database-edit::before {
  content: "\\FB62";
}

.mdi-database-export::before {
  content: "\\F95D";
}

.mdi-database-import::before {
  content: "\\F95C";
}

.mdi-database-lock::before {
  content: "\\FAA9";
}

.mdi-database-marker::before {
  content: "\\F0321";
}

.mdi-database-minus::before {
  content: "\\F1B9";
}

.mdi-database-plus::before {
  content: "\\F1BA";
}

.mdi-database-refresh::before {
  content: "\\FCDB";
}

.mdi-database-remove::before {
  content: "\\FCDC";
}

.mdi-database-search::before {
  content: "\\F865";
}

.mdi-database-settings::before {
  content: "\\FCDD";
}

.mdi-death-star::before {
  content: "\\F8D7";
}

.mdi-death-star-variant::before {
  content: "\\F8D8";
}

.mdi-deathly-hallows::before {
  content: "\\FB63";
}

.mdi-debian::before {
  content: "\\F8D9";
}

.mdi-debug-step-into::before {
  content: "\\F1BB";
}

.mdi-debug-step-out::before {
  content: "\\F1BC";
}

.mdi-debug-step-over::before {
  content: "\\F1BD";
}

.mdi-decagram::before {
  content: "\\F76B";
}

.mdi-decagram-outline::before {
  content: "\\F76C";
}

.mdi-decimal::before {
  content: "\\F00CC";
}

.mdi-decimal-comma::before {
  content: "\\F00CD";
}

.mdi-decimal-comma-decrease::before {
  content: "\\F00CE";
}

.mdi-decimal-comma-increase::before {
  content: "\\F00CF";
}

.mdi-decimal-decrease::before {
  content: "\\F1BE";
}

.mdi-decimal-increase::before {
  content: "\\F1BF";
}

.mdi-delete::before {
  content: "\\F1C0";
}

.mdi-delete-alert::before {
  content: "\\F00D0";
}

.mdi-delete-alert-outline::before {
  content: "\\F00D1";
}

.mdi-delete-circle::before {
  content: "\\F682";
}

.mdi-delete-circle-outline::before {
  content: "\\FB64";
}

.mdi-delete-empty::before {
  content: "\\F6CB";
}

.mdi-delete-empty-outline::before {
  content: "\\FEBA";
}

.mdi-delete-forever::before {
  content: "\\F5E8";
}

.mdi-delete-forever-outline::before {
  content: "\\FB65";
}

.mdi-delete-off::before {
  content: "\\F00D2";
}

.mdi-delete-off-outline::before {
  content: "\\F00D3";
}

.mdi-delete-outline::before {
  content: "\\F9E6";
}

.mdi-delete-restore::before {
  content: "\\F818";
}

.mdi-delete-sweep::before {
  content: "\\F5E9";
}

.mdi-delete-sweep-outline::before {
  content: "\\FC3E";
}

.mdi-delete-variant::before {
  content: "\\F1C1";
}

.mdi-delta::before {
  content: "\\F1C2";
}

.mdi-desk::before {
  content: "\\F0264";
}

.mdi-desk-lamp::before {
  content: "\\F95E";
}

.mdi-deskphone::before {
  content: "\\F1C3";
}

.mdi-desktop-classic::before {
  content: "\\F7BF";
}

.mdi-desktop-mac::before {
  content: "\\F1C4";
}

.mdi-desktop-mac-dashboard::before {
  content: "\\F9E7";
}

.mdi-desktop-tower::before {
  content: "\\F1C5";
}

.mdi-desktop-tower-monitor::before {
  content: "\\FAAA";
}

.mdi-details::before {
  content: "\\F1C6";
}

.mdi-dev-to::before {
  content: "\\FD4A";
}

.mdi-developer-board::before {
  content: "\\F696";
}

.mdi-deviantart::before {
  content: "\\F1C7";
}

.mdi-devices::before {
  content: "\\FFD0";
}

.mdi-diabetes::before {
  content: "\\F0151";
}

.mdi-dialpad::before {
  content: "\\F61C";
}

.mdi-diameter::before {
  content: "\\FC3F";
}

.mdi-diameter-outline::before {
  content: "\\FC40";
}

.mdi-diameter-variant::before {
  content: "\\FC41";
}

.mdi-diamond::before {
  content: "\\FB66";
}

.mdi-diamond-outline::before {
  content: "\\FB67";
}

.mdi-diamond-stone::before {
  content: "\\F1C8";
}

.mdi-dice-1::before {
  content: "\\F1CA";
}

.mdi-dice-1-outline::before {
  content: "\\F0175";
}

.mdi-dice-2::before {
  content: "\\F1CB";
}

.mdi-dice-2-outline::before {
  content: "\\F0176";
}

.mdi-dice-3::before {
  content: "\\F1CC";
}

.mdi-dice-3-outline::before {
  content: "\\F0177";
}

.mdi-dice-4::before {
  content: "\\F1CD";
}

.mdi-dice-4-outline::before {
  content: "\\F0178";
}

.mdi-dice-5::before {
  content: "\\F1CE";
}

.mdi-dice-5-outline::before {
  content: "\\F0179";
}

.mdi-dice-6::before {
  content: "\\F1CF";
}

.mdi-dice-6-outline::before {
  content: "\\F017A";
}

.mdi-dice-d10::before {
  content: "\\F017E";
}

.mdi-dice-d10-outline::before {
  content: "\\F76E";
}

.mdi-dice-d12::before {
  content: "\\F017F";
}

.mdi-dice-d12-outline::before {
  content: "\\F866";
}

.mdi-dice-d20::before {
  content: "\\F0180";
}

.mdi-dice-d20-outline::before {
  content: "\\F5EA";
}

.mdi-dice-d4::before {
  content: "\\F017B";
}

.mdi-dice-d4-outline::before {
  content: "\\F5EB";
}

.mdi-dice-d6::before {
  content: "\\F017C";
}

.mdi-dice-d6-outline::before {
  content: "\\F5EC";
}

.mdi-dice-d8::before {
  content: "\\F017D";
}

.mdi-dice-d8-outline::before {
  content: "\\F5ED";
}

.mdi-dice-multiple::before {
  content: "\\F76D";
}

.mdi-dice-multiple-outline::before {
  content: "\\F0181";
}

.mdi-dictionary::before {
  content: "\\F61D";
}

.mdi-digital-ocean::before {
  content: "\\F0262";
}

.mdi-dip-switch::before {
  content: "\\F7C0";
}

.mdi-directions::before {
  content: "\\F1D0";
}

.mdi-directions-fork::before {
  content: "\\F641";
}

.mdi-disc::before {
  content: "\\F5EE";
}

.mdi-disc-alert::before {
  content: "\\F1D1";
}

.mdi-disc-player::before {
  content: "\\F95F";
}

.mdi-discord::before {
  content: "\\F66F";
}

.mdi-dishwasher::before {
  content: "\\FAAB";
}

.mdi-dishwasher-alert::before {
  content: "\\F01E3";
}

.mdi-dishwasher-off::before {
  content: "\\F01E4";
}

.mdi-disqus::before {
  content: "\\F1D2";
}

.mdi-disqus-outline::before {
  content: "\\F1D3";
}

.mdi-distribute-horizontal-center::before {
  content: "\\F01F4";
}

.mdi-distribute-horizontal-left::before {
  content: "\\F01F3";
}

.mdi-distribute-horizontal-right::before {
  content: "\\F01F5";
}

.mdi-distribute-vertical-bottom::before {
  content: "\\F01F6";
}

.mdi-distribute-vertical-center::before {
  content: "\\F01F7";
}

.mdi-distribute-vertical-top::before {
  content: "\\F01F8";
}

.mdi-diving-flippers::before {
  content: "\\FD9B";
}

.mdi-diving-helmet::before {
  content: "\\FD9C";
}

.mdi-diving-scuba::before {
  content: "\\FD9D";
}

.mdi-diving-scuba-flag::before {
  content: "\\FD9E";
}

.mdi-diving-scuba-tank::before {
  content: "\\FD9F";
}

.mdi-diving-scuba-tank-multiple::before {
  content: "\\FDA0";
}

.mdi-diving-snorkel::before {
  content: "\\FDA1";
}

.mdi-division::before {
  content: "\\F1D4";
}

.mdi-division-box::before {
  content: "\\F1D5";
}

.mdi-dlna::before {
  content: "\\FA40";
}

.mdi-dna::before {
  content: "\\F683";
}

.mdi-dns::before {
  content: "\\F1D6";
}

.mdi-dns-outline::before {
  content: "\\FB68";
}

.mdi-do-not-disturb::before {
  content: "\\F697";
}

.mdi-do-not-disturb-off::before {
  content: "\\F698";
}

.mdi-dock-bottom::before {
  content: "\\F00D4";
}

.mdi-dock-left::before {
  content: "\\F00D5";
}

.mdi-dock-right::before {
  content: "\\F00D6";
}

.mdi-dock-window::before {
  content: "\\F00D7";
}

.mdi-docker::before {
  content: "\\F867";
}

.mdi-doctor::before {
  content: "\\FA41";
}

.mdi-dog::before {
  content: "\\FA42";
}

.mdi-dog-service::before {
  content: "\\FAAC";
}

.mdi-dog-side::before {
  content: "\\FA43";
}

.mdi-dolby::before {
  content: "\\F6B2";
}

.mdi-dolly::before {
  content: "\\FEBB";
}

.mdi-domain::before {
  content: "\\F1D7";
}

.mdi-domain-off::before {
  content: "\\FD4B";
}

.mdi-domain-plus::before {
  content: "\\F00D8";
}

.mdi-domain-remove::before {
  content: "\\F00D9";
}

.mdi-domino-mask::before {
  content: "\\F0045";
}

.mdi-donkey::before {
  content: "\\F7C1";
}

.mdi-door::before {
  content: "\\F819";
}

.mdi-door-closed::before {
  content: "\\F81A";
}

.mdi-door-closed-lock::before {
  content: "\\F00DA";
}

.mdi-door-open::before {
  content: "\\F81B";
}

.mdi-doorbell::before {
  content: "\\F0311";
}

.mdi-doorbell-video::before {
  content: "\\F868";
}

.mdi-dot-net::before {
  content: "\\FAAD";
}

.mdi-dots-horizontal::before {
  content: "\\F1D8";
}

.mdi-dots-horizontal-circle::before {
  content: "\\F7C2";
}

.mdi-dots-horizontal-circle-outline::before {
  content: "\\FB69";
}

.mdi-dots-vertical::before {
  content: "\\F1D9";
}

.mdi-dots-vertical-circle::before {
  content: "\\F7C3";
}

.mdi-dots-vertical-circle-outline::before {
  content: "\\FB6A";
}

.mdi-douban::before {
  content: "\\F699";
}

.mdi-download::before {
  content: "\\F1DA";
}

.mdi-download-multiple::before {
  content: "\\F9E8";
}

.mdi-download-network::before {
  content: "\\F6F3";
}

.mdi-download-network-outline::before {
  content: "\\FC42";
}

.mdi-download-off::before {
  content: "\\F00DB";
}

.mdi-download-off-outline::before {
  content: "\\F00DC";
}

.mdi-download-outline::before {
  content: "\\FB6B";
}

.mdi-drag::before {
  content: "\\F1DB";
}

.mdi-drag-horizontal::before {
  content: "\\F1DC";
}

.mdi-drag-horizontal-variant::before {
  content: "\\F031B";
}

.mdi-drag-variant::before {
  content: "\\FB6C";
}

.mdi-drag-vertical::before {
  content: "\\F1DD";
}

.mdi-drag-vertical-variant::before {
  content: "\\F031C";
}

.mdi-drama-masks::before {
  content: "\\FCDE";
}

.mdi-draw::before {
  content: "\\FF66";
}

.mdi-drawing::before {
  content: "\\F1DE";
}

.mdi-drawing-box::before {
  content: "\\F1DF";
}

.mdi-dresser::before {
  content: "\\FF67";
}

.mdi-dresser-outline::before {
  content: "\\FF68";
}

.mdi-dribbble::before {
  content: "\\F1E0";
}

.mdi-dribbble-box::before {
  content: "\\F1E1";
}

.mdi-drone::before {
  content: "\\F1E2";
}

.mdi-dropbox::before {
  content: "\\F1E3";
}

.mdi-drupal::before {
  content: "\\F1E4";
}

.mdi-duck::before {
  content: "\\F1E5";
}

.mdi-dumbbell::before {
  content: "\\F1E6";
}

.mdi-dump-truck::before {
  content: "\\FC43";
}

.mdi-ear-hearing::before {
  content: "\\F7C4";
}

.mdi-ear-hearing-off::before {
  content: "\\FA44";
}

.mdi-earth::before {
  content: "\\F1E7";
}

.mdi-earth-arrow-right::before {
  content: "\\F033C";
}

.mdi-earth-box::before {
  content: "\\F6CC";
}

.mdi-earth-box-off::before {
  content: "\\F6CD";
}

.mdi-earth-off::before {
  content: "\\F1E8";
}

.mdi-edge::before {
  content: "\\F1E9";
}

.mdi-edge-legacy::before {
  content: "\\F027B";
}

.mdi-egg::before {
  content: "\\FAAE";
}

.mdi-egg-easter::before {
  content: "\\FAAF";
}

.mdi-eight-track::before {
  content: "\\F9E9";
}

.mdi-eject::before {
  content: "\\F1EA";
}

.mdi-eject-outline::before {
  content: "\\FB6D";
}

.mdi-electric-switch::before {
  content: "\\FEBC";
}

.mdi-electric-switch-closed::before {
  content: "\\F0104";
}

.mdi-electron-framework::before {
  content: "\\F0046";
}

.mdi-elephant::before {
  content: "\\F7C5";
}

.mdi-elevation-decline::before {
  content: "\\F1EB";
}

.mdi-elevation-rise::before {
  content: "\\F1EC";
}

.mdi-elevator::before {
  content: "\\F1ED";
}

.mdi-elevator-down::before {
  content: "\\F02ED";
}

.mdi-elevator-up::before {
  content: "\\F02EC";
}

.mdi-ellipse::before {
  content: "\\FEBD";
}

.mdi-ellipse-outline::before {
  content: "\\FEBE";
}

.mdi-email::before {
  content: "\\F1EE";
}

.mdi-email-alert::before {
  content: "\\F6CE";
}

.mdi-email-alert-outline::before {
  content: "\\FD1E";
}

.mdi-email-box::before {
  content: "\\FCDF";
}

.mdi-email-check::before {
  content: "\\FAB0";
}

.mdi-email-check-outline::before {
  content: "\\FAB1";
}

.mdi-email-edit::before {
  content: "\\FF00";
}

.mdi-email-edit-outline::before {
  content: "\\FF01";
}

.mdi-email-lock::before {
  content: "\\F1F1";
}

.mdi-email-mark-as-unread::before {
  content: "\\FB6E";
}

.mdi-email-minus::before {
  content: "\\FF02";
}

.mdi-email-minus-outline::before {
  content: "\\FF03";
}

.mdi-email-multiple::before {
  content: "\\FF04";
}

.mdi-email-multiple-outline::before {
  content: "\\FF05";
}

.mdi-email-newsletter::before {
  content: "\\FFD1";
}

.mdi-email-open::before {
  content: "\\F1EF";
}

.mdi-email-open-multiple::before {
  content: "\\FF06";
}

.mdi-email-open-multiple-outline::before {
  content: "\\FF07";
}

.mdi-email-open-outline::before {
  content: "\\F5EF";
}

.mdi-email-outline::before {
  content: "\\F1F0";
}

.mdi-email-plus::before {
  content: "\\F9EA";
}

.mdi-email-plus-outline::before {
  content: "\\F9EB";
}

.mdi-email-receive::before {
  content: "\\F0105";
}

.mdi-email-receive-outline::before {
  content: "\\F0106";
}

.mdi-email-search::before {
  content: "\\F960";
}

.mdi-email-search-outline::before {
  content: "\\F961";
}

.mdi-email-send::before {
  content: "\\F0107";
}

.mdi-email-send-outline::before {
  content: "\\F0108";
}

.mdi-email-sync::before {
  content: "\\F02F2";
}

.mdi-email-sync-outline::before {
  content: "\\F02F3";
}

.mdi-email-variant::before {
  content: "\\F5F0";
}

.mdi-ember::before {
  content: "\\FB15";
}

.mdi-emby::before {
  content: "\\F6B3";
}

.mdi-emoticon::before {
  content: "\\FC44";
}

.mdi-emoticon-angry::before {
  content: "\\FC45";
}

.mdi-emoticon-angry-outline::before {
  content: "\\FC46";
}

.mdi-emoticon-confused::before {
  content: "\\F0109";
}

.mdi-emoticon-confused-outline::before {
  content: "\\F010A";
}

.mdi-emoticon-cool::before {
  content: "\\FC47";
}

.mdi-emoticon-cool-outline::before {
  content: "\\F1F3";
}

.mdi-emoticon-cry::before {
  content: "\\FC48";
}

.mdi-emoticon-cry-outline::before {
  content: "\\FC49";
}

.mdi-emoticon-dead::before {
  content: "\\FC4A";
}

.mdi-emoticon-dead-outline::before {
  content: "\\F69A";
}

.mdi-emoticon-devil::before {
  content: "\\FC4B";
}

.mdi-emoticon-devil-outline::before {
  content: "\\F1F4";
}

.mdi-emoticon-excited::before {
  content: "\\FC4C";
}

.mdi-emoticon-excited-outline::before {
  content: "\\F69B";
}

.mdi-emoticon-frown::before {
  content: "\\FF69";
}

.mdi-emoticon-frown-outline::before {
  content: "\\FF6A";
}

.mdi-emoticon-happy::before {
  content: "\\FC4D";
}

.mdi-emoticon-happy-outline::before {
  content: "\\F1F5";
}

.mdi-emoticon-kiss::before {
  content: "\\FC4E";
}

.mdi-emoticon-kiss-outline::before {
  content: "\\FC4F";
}

.mdi-emoticon-lol::before {
  content: "\\F023F";
}

.mdi-emoticon-lol-outline::before {
  content: "\\F0240";
}

.mdi-emoticon-neutral::before {
  content: "\\FC50";
}

.mdi-emoticon-neutral-outline::before {
  content: "\\F1F6";
}

.mdi-emoticon-outline::before {
  content: "\\F1F2";
}

.mdi-emoticon-poop::before {
  content: "\\F1F7";
}

.mdi-emoticon-poop-outline::before {
  content: "\\FC51";
}

.mdi-emoticon-sad::before {
  content: "\\FC52";
}

.mdi-emoticon-sad-outline::before {
  content: "\\F1F8";
}

.mdi-emoticon-tongue::before {
  content: "\\F1F9";
}

.mdi-emoticon-tongue-outline::before {
  content: "\\FC53";
}

.mdi-emoticon-wink::before {
  content: "\\FC54";
}

.mdi-emoticon-wink-outline::before {
  content: "\\FC55";
}

.mdi-engine::before {
  content: "\\F1FA";
}

.mdi-engine-off::before {
  content: "\\FA45";
}

.mdi-engine-off-outline::before {
  content: "\\FA46";
}

.mdi-engine-outline::before {
  content: "\\F1FB";
}

.mdi-epsilon::before {
  content: "\\F010B";
}

.mdi-equal::before {
  content: "\\F1FC";
}

.mdi-equal-box::before {
  content: "\\F1FD";
}

.mdi-equalizer::before {
  content: "\\FEBF";
}

.mdi-equalizer-outline::before {
  content: "\\FEC0";
}

.mdi-eraser::before {
  content: "\\F1FE";
}

.mdi-eraser-variant::before {
  content: "\\F642";
}

.mdi-escalator::before {
  content: "\\F1FF";
}

.mdi-escalator-down::before {
  content: "\\F02EB";
}

.mdi-escalator-up::before {
  content: "\\F02EA";
}

.mdi-eslint::before {
  content: "\\FC56";
}

.mdi-et::before {
  content: "\\FAB2";
}

.mdi-ethereum::before {
  content: "\\F869";
}

.mdi-ethernet::before {
  content: "\\F200";
}

.mdi-ethernet-cable::before {
  content: "\\F201";
}

.mdi-ethernet-cable-off::before {
  content: "\\F202";
}

.mdi-etsy::before {
  content: "\\F203";
}

.mdi-ev-station::before {
  content: "\\F5F1";
}

.mdi-eventbrite::before {
  content: "\\F7C6";
}

.mdi-evernote::before {
  content: "\\F204";
}

.mdi-excavator::before {
  content: "\\F0047";
}

.mdi-exclamation::before {
  content: "\\F205";
}

.mdi-exclamation-thick::before {
  content: "\\F0263";
}

.mdi-exit-run::before {
  content: "\\FA47";
}

.mdi-exit-to-app::before {
  content: "\\F206";
}

.mdi-expand-all::before {
  content: "\\FAB3";
}

.mdi-expand-all-outline::before {
  content: "\\FAB4";
}

.mdi-expansion-card::before {
  content: "\\F8AD";
}

.mdi-expansion-card-variant::before {
  content: "\\FFD2";
}

.mdi-exponent::before {
  content: "\\F962";
}

.mdi-exponent-box::before {
  content: "\\F963";
}

.mdi-export::before {
  content: "\\F207";
}

.mdi-export-variant::before {
  content: "\\FB6F";
}

.mdi-eye::before {
  content: "\\F208";
}

.mdi-eye-check::before {
  content: "\\FCE0";
}

.mdi-eye-check-outline::before {
  content: "\\FCE1";
}

.mdi-eye-circle::before {
  content: "\\FB70";
}

.mdi-eye-circle-outline::before {
  content: "\\FB71";
}

.mdi-eye-minus::before {
  content: "\\F0048";
}

.mdi-eye-minus-outline::before {
  content: "\\F0049";
}

.mdi-eye-off::before {
  content: "\\F209";
}

.mdi-eye-off-outline::before {
  content: "\\F6D0";
}

.mdi-eye-outline::before {
  content: "\\F6CF";
}

.mdi-eye-plus::before {
  content: "\\F86A";
}

.mdi-eye-plus-outline::before {
  content: "\\F86B";
}

.mdi-eye-settings::before {
  content: "\\F86C";
}

.mdi-eye-settings-outline::before {
  content: "\\F86D";
}

.mdi-eyedropper::before {
  content: "\\F20A";
}

.mdi-eyedropper-variant::before {
  content: "\\F20B";
}

.mdi-face::before {
  content: "\\F643";
}

.mdi-face-agent::before {
  content: "\\FD4C";
}

.mdi-face-outline::before {
  content: "\\FB72";
}

.mdi-face-profile::before {
  content: "\\F644";
}

.mdi-face-profile-woman::before {
  content: "\\F00A1";
}

.mdi-face-recognition::before {
  content: "\\FC57";
}

.mdi-face-woman::before {
  content: "\\F00A2";
}

.mdi-face-woman-outline::before {
  content: "\\F00A3";
}

.mdi-facebook::before {
  content: "\\F20C";
}

.mdi-facebook-box::before {
  content: "\\F20D";
}

.mdi-facebook-messenger::before {
  content: "\\F20E";
}

.mdi-facebook-workplace::before {
  content: "\\FB16";
}

.mdi-factory::before {
  content: "\\F20F";
}

.mdi-fan::before {
  content: "\\F210";
}

.mdi-fan-off::before {
  content: "\\F81C";
}

.mdi-fast-forward::before {
  content: "\\F211";
}

.mdi-fast-forward-10::before {
  content: "\\FD4D";
}

.mdi-fast-forward-30::before {
  content: "\\FCE2";
}

.mdi-fast-forward-5::before {
  content: "\\F0223";
}

.mdi-fast-forward-outline::before {
  content: "\\F6D1";
}

.mdi-fax::before {
  content: "\\F212";
}

.mdi-feather::before {
  content: "\\F6D2";
}

.mdi-feature-search::before {
  content: "\\FA48";
}

.mdi-feature-search-outline::before {
  content: "\\FA49";
}

.mdi-fedora::before {
  content: "\\F8DA";
}

.mdi-ferris-wheel::before {
  content: "\\FEC1";
}

.mdi-ferry::before {
  content: "\\F213";
}

.mdi-file::before {
  content: "\\F214";
}

.mdi-file-account::before {
  content: "\\F73A";
}

.mdi-file-account-outline::before {
  content: "\\F004A";
}

.mdi-file-alert::before {
  content: "\\FA4A";
}

.mdi-file-alert-outline::before {
  content: "\\FA4B";
}

.mdi-file-cabinet::before {
  content: "\\FAB5";
}

.mdi-file-cad::before {
  content: "\\FF08";
}

.mdi-file-cad-box::before {
  content: "\\FF09";
}

.mdi-file-cancel::before {
  content: "\\FDA2";
}

.mdi-file-cancel-outline::before {
  content: "\\FDA3";
}

.mdi-file-certificate::before {
  content: "\\F01B1";
}

.mdi-file-certificate-outline::before {
  content: "\\F01B2";
}

.mdi-file-chart::before {
  content: "\\F215";
}

.mdi-file-chart-outline::before {
  content: "\\F004B";
}

.mdi-file-check::before {
  content: "\\F216";
}

.mdi-file-check-outline::before {
  content: "\\FE7B";
}

.mdi-file-clock::before {
  content: "\\F030C";
}

.mdi-file-clock-outline::before {
  content: "\\F030D";
}

.mdi-file-cloud::before {
  content: "\\F217";
}

.mdi-file-cloud-outline::before {
  content: "\\F004C";
}

.mdi-file-code::before {
  content: "\\F22E";
}

.mdi-file-code-outline::before {
  content: "\\F004D";
}

.mdi-file-compare::before {
  content: "\\F8A9";
}

.mdi-file-delimited::before {
  content: "\\F218";
}

.mdi-file-delimited-outline::before {
  content: "\\FEC2";
}

.mdi-file-document::before {
  content: "\\F219";
}

.mdi-file-document-box::before {
  content: "\\F21A";
}

.mdi-file-document-box-check::before {
  content: "\\FEC3";
}

.mdi-file-document-box-check-outline::before {
  content: "\\FEC4";
}

.mdi-file-document-box-minus::before {
  content: "\\FEC5";
}

.mdi-file-document-box-minus-outline::before {
  content: "\\FEC6";
}

.mdi-file-document-box-multiple::before {
  content: "\\FAB6";
}

.mdi-file-document-box-multiple-outline::before {
  content: "\\FAB7";
}

.mdi-file-document-box-outline::before {
  content: "\\F9EC";
}

.mdi-file-document-box-plus::before {
  content: "\\FEC7";
}

.mdi-file-document-box-plus-outline::before {
  content: "\\FEC8";
}

.mdi-file-document-box-remove::before {
  content: "\\FEC9";
}

.mdi-file-document-box-remove-outline::before {
  content: "\\FECA";
}

.mdi-file-document-box-search::before {
  content: "\\FECB";
}

.mdi-file-document-box-search-outline::before {
  content: "\\FECC";
}

.mdi-file-document-edit::before {
  content: "\\FDA4";
}

.mdi-file-document-edit-outline::before {
  content: "\\FDA5";
}

.mdi-file-document-outline::before {
  content: "\\F9ED";
}

.mdi-file-download::before {
  content: "\\F964";
}

.mdi-file-download-outline::before {
  content: "\\F965";
}

.mdi-file-edit::before {
  content: "\\F0212";
}

.mdi-file-edit-outline::before {
  content: "\\F0213";
}

.mdi-file-excel::before {
  content: "\\F21B";
}

.mdi-file-excel-box::before {
  content: "\\F21C";
}

.mdi-file-excel-box-outline::before {
  content: "\\F004E";
}

.mdi-file-excel-outline::before {
  content: "\\F004F";
}

.mdi-file-export::before {
  content: "\\F21D";
}

.mdi-file-export-outline::before {
  content: "\\F0050";
}

.mdi-file-eye::before {
  content: "\\FDA6";
}

.mdi-file-eye-outline::before {
  content: "\\FDA7";
}

.mdi-file-find::before {
  content: "\\F21E";
}

.mdi-file-find-outline::before {
  content: "\\FB73";
}

.mdi-file-hidden::before {
  content: "\\F613";
}

.mdi-file-image::before {
  content: "\\F21F";
}

.mdi-file-image-outline::before {
  content: "\\FECD";
}

.mdi-file-import::before {
  content: "\\F220";
}

.mdi-file-import-outline::before {
  content: "\\F0051";
}

.mdi-file-key::before {
  content: "\\F01AF";
}

.mdi-file-key-outline::before {
  content: "\\F01B0";
}

.mdi-file-link::before {
  content: "\\F01A2";
}

.mdi-file-link-outline::before {
  content: "\\F01A3";
}

.mdi-file-lock::before {
  content: "\\F221";
}

.mdi-file-lock-outline::before {
  content: "\\F0052";
}

.mdi-file-move::before {
  content: "\\FAB8";
}

.mdi-file-move-outline::before {
  content: "\\F0053";
}

.mdi-file-multiple::before {
  content: "\\F222";
}

.mdi-file-multiple-outline::before {
  content: "\\F0054";
}

.mdi-file-music::before {
  content: "\\F223";
}

.mdi-file-music-outline::before {
  content: "\\FE7C";
}

.mdi-file-outline::before {
  content: "\\F224";
}

.mdi-file-pdf::before {
  content: "\\F225";
}

.mdi-file-pdf-box::before {
  content: "\\F226";
}

.mdi-file-pdf-box-outline::before {
  content: "\\FFD3";
}

.mdi-file-pdf-outline::before {
  content: "\\FE7D";
}

.mdi-file-percent::before {
  content: "\\F81D";
}

.mdi-file-percent-outline::before {
  content: "\\F0055";
}

.mdi-file-phone::before {
  content: "\\F01A4";
}

.mdi-file-phone-outline::before {
  content: "\\F01A5";
}

.mdi-file-plus::before {
  content: "\\F751";
}

.mdi-file-plus-outline::before {
  content: "\\FF0A";
}

.mdi-file-powerpoint::before {
  content: "\\F227";
}

.mdi-file-powerpoint-box::before {
  content: "\\F228";
}

.mdi-file-powerpoint-box-outline::before {
  content: "\\F0056";
}

.mdi-file-powerpoint-outline::before {
  content: "\\F0057";
}

.mdi-file-presentation-box::before {
  content: "\\F229";
}

.mdi-file-question::before {
  content: "\\F86E";
}

.mdi-file-question-outline::before {
  content: "\\F0058";
}

.mdi-file-remove::before {
  content: "\\FB74";
}

.mdi-file-remove-outline::before {
  content: "\\F0059";
}

.mdi-file-replace::before {
  content: "\\FB17";
}

.mdi-file-replace-outline::before {
  content: "\\FB18";
}

.mdi-file-restore::before {
  content: "\\F670";
}

.mdi-file-restore-outline::before {
  content: "\\F005A";
}

.mdi-file-search::before {
  content: "\\FC58";
}

.mdi-file-search-outline::before {
  content: "\\FC59";
}

.mdi-file-send::before {
  content: "\\F22A";
}

.mdi-file-send-outline::before {
  content: "\\F005B";
}

.mdi-file-settings::before {
  content: "\\F00A4";
}

.mdi-file-settings-outline::before {
  content: "\\F00A5";
}

.mdi-file-settings-variant::before {
  content: "\\F00A6";
}

.mdi-file-settings-variant-outline::before {
  content: "\\F00A7";
}

.mdi-file-star::before {
  content: "\\F005C";
}

.mdi-file-star-outline::before {
  content: "\\F005D";
}

.mdi-file-swap::before {
  content: "\\FFD4";
}

.mdi-file-swap-outline::before {
  content: "\\FFD5";
}

.mdi-file-sync::before {
  content: "\\F0241";
}

.mdi-file-sync-outline::before {
  content: "\\F0242";
}

.mdi-file-table::before {
  content: "\\FC5A";
}

.mdi-file-table-box::before {
  content: "\\F010C";
}

.mdi-file-table-box-multiple::before {
  content: "\\F010D";
}

.mdi-file-table-box-multiple-outline::before {
  content: "\\F010E";
}

.mdi-file-table-box-outline::before {
  content: "\\F010F";
}

.mdi-file-table-outline::before {
  content: "\\FC5B";
}

.mdi-file-tree::before {
  content: "\\F645";
}

.mdi-file-undo::before {
  content: "\\F8DB";
}

.mdi-file-undo-outline::before {
  content: "\\F005E";
}

.mdi-file-upload::before {
  content: "\\FA4C";
}

.mdi-file-upload-outline::before {
  content: "\\FA4D";
}

.mdi-file-video::before {
  content: "\\F22B";
}

.mdi-file-video-outline::before {
  content: "\\FE10";
}

.mdi-file-word::before {
  content: "\\F22C";
}

.mdi-file-word-box::before {
  content: "\\F22D";
}

.mdi-file-word-box-outline::before {
  content: "\\F005F";
}

.mdi-file-word-outline::before {
  content: "\\F0060";
}

.mdi-film::before {
  content: "\\F22F";
}

.mdi-filmstrip::before {
  content: "\\F230";
}

.mdi-filmstrip-off::before {
  content: "\\F231";
}

.mdi-filter::before {
  content: "\\F232";
}

.mdi-filter-menu::before {
  content: "\\F0110";
}

.mdi-filter-menu-outline::before {
  content: "\\F0111";
}

.mdi-filter-minus::before {
  content: "\\FF0B";
}

.mdi-filter-minus-outline::before {
  content: "\\FF0C";
}

.mdi-filter-outline::before {
  content: "\\F233";
}

.mdi-filter-plus::before {
  content: "\\FF0D";
}

.mdi-filter-plus-outline::before {
  content: "\\FF0E";
}

.mdi-filter-remove::before {
  content: "\\F234";
}

.mdi-filter-remove-outline::before {
  content: "\\F235";
}

.mdi-filter-variant::before {
  content: "\\F236";
}

.mdi-filter-variant-minus::before {
  content: "\\F013D";
}

.mdi-filter-variant-plus::before {
  content: "\\F013E";
}

.mdi-filter-variant-remove::before {
  content: "\\F0061";
}

.mdi-finance::before {
  content: "\\F81E";
}

.mdi-find-replace::before {
  content: "\\F6D3";
}

.mdi-fingerprint::before {
  content: "\\F237";
}

.mdi-fingerprint-off::before {
  content: "\\FECE";
}

.mdi-fire::before {
  content: "\\F238";
}

.mdi-fire-extinguisher::before {
  content: "\\FF0F";
}

.mdi-fire-hydrant::before {
  content: "\\F0162";
}

.mdi-fire-hydrant-alert::before {
  content: "\\F0163";
}

.mdi-fire-hydrant-off::before {
  content: "\\F0164";
}

.mdi-fire-truck::before {
  content: "\\F8AA";
}

.mdi-firebase::before {
  content: "\\F966";
}

.mdi-firefox::before {
  content: "\\F239";
}

.mdi-fireplace::before {
  content: "\\FE11";
}

.mdi-fireplace-off::before {
  content: "\\FE12";
}

.mdi-firework::before {
  content: "\\FE13";
}

.mdi-fish::before {
  content: "\\F23A";
}

.mdi-fishbowl::before {
  content: "\\FF10";
}

.mdi-fishbowl-outline::before {
  content: "\\FF11";
}

.mdi-fit-to-page::before {
  content: "\\FF12";
}

.mdi-fit-to-page-outline::before {
  content: "\\FF13";
}

.mdi-flag::before {
  content: "\\F23B";
}

.mdi-flag-checkered::before {
  content: "\\F23C";
}

.mdi-flag-minus::before {
  content: "\\FB75";
}

.mdi-flag-minus-outline::before {
  content: "\\F00DD";
}

.mdi-flag-outline::before {
  content: "\\F23D";
}

.mdi-flag-plus::before {
  content: "\\FB76";
}

.mdi-flag-plus-outline::before {
  content: "\\F00DE";
}

.mdi-flag-remove::before {
  content: "\\FB77";
}

.mdi-flag-remove-outline::before {
  content: "\\F00DF";
}

.mdi-flag-triangle::before {
  content: "\\F23F";
}

.mdi-flag-variant::before {
  content: "\\F240";
}

.mdi-flag-variant-outline::before {
  content: "\\F23E";
}

.mdi-flare::before {
  content: "\\FD4E";
}

.mdi-flash::before {
  content: "\\F241";
}

.mdi-flash-alert::before {
  content: "\\FF14";
}

.mdi-flash-alert-outline::before {
  content: "\\FF15";
}

.mdi-flash-auto::before {
  content: "\\F242";
}

.mdi-flash-circle::before {
  content: "\\F81F";
}

.mdi-flash-off::before {
  content: "\\F243";
}

.mdi-flash-outline::before {
  content: "\\F6D4";
}

.mdi-flash-red-eye::before {
  content: "\\F67A";
}

.mdi-flashlight::before {
  content: "\\F244";
}

.mdi-flashlight-off::before {
  content: "\\F245";
}

.mdi-flask::before {
  content: "\\F093";
}

.mdi-flask-empty::before {
  content: "\\F094";
}

.mdi-flask-empty-minus::before {
  content: "\\F0265";
}

.mdi-flask-empty-minus-outline::before {
  content: "\\F0266";
}

.mdi-flask-empty-outline::before {
  content: "\\F095";
}

.mdi-flask-empty-plus::before {
  content: "\\F0267";
}

.mdi-flask-empty-plus-outline::before {
  content: "\\F0268";
}

.mdi-flask-empty-remove::before {
  content: "\\F0269";
}

.mdi-flask-empty-remove-outline::before {
  content: "\\F026A";
}

.mdi-flask-minus::before {
  content: "\\F026B";
}

.mdi-flask-minus-outline::before {
  content: "\\F026C";
}

.mdi-flask-outline::before {
  content: "\\F096";
}

.mdi-flask-plus::before {
  content: "\\F026D";
}

.mdi-flask-plus-outline::before {
  content: "\\F026E";
}

.mdi-flask-remove::before {
  content: "\\F026F";
}

.mdi-flask-remove-outline::before {
  content: "\\F0270";
}

.mdi-flask-round-bottom::before {
  content: "\\F0276";
}

.mdi-flask-round-bottom-empty::before {
  content: "\\F0277";
}

.mdi-flask-round-bottom-empty-outline::before {
  content: "\\F0278";
}

.mdi-flask-round-bottom-outline::before {
  content: "\\F0279";
}

.mdi-flattr::before {
  content: "\\F246";
}

.mdi-fleur-de-lis::before {
  content: "\\F032E";
}

.mdi-flickr::before {
  content: "\\FCE3";
}

.mdi-flip-horizontal::before {
  content: "\\F0112";
}

.mdi-flip-to-back::before {
  content: "\\F247";
}

.mdi-flip-to-front::before {
  content: "\\F248";
}

.mdi-flip-vertical::before {
  content: "\\F0113";
}

.mdi-floor-lamp::before {
  content: "\\F8DC";
}

.mdi-floor-lamp-dual::before {
  content: "\\F0062";
}

.mdi-floor-lamp-variant::before {
  content: "\\F0063";
}

.mdi-floor-plan::before {
  content: "\\F820";
}

.mdi-floppy::before {
  content: "\\F249";
}

.mdi-floppy-variant::before {
  content: "\\F9EE";
}

.mdi-flower::before {
  content: "\\F24A";
}

.mdi-flower-outline::before {
  content: "\\F9EF";
}

.mdi-flower-poppy::before {
  content: "\\FCE4";
}

.mdi-flower-tulip::before {
  content: "\\F9F0";
}

.mdi-flower-tulip-outline::before {
  content: "\\F9F1";
}

.mdi-focus-auto::before {
  content: "\\FF6B";
}

.mdi-focus-field::before {
  content: "\\FF6C";
}

.mdi-focus-field-horizontal::before {
  content: "\\FF6D";
}

.mdi-focus-field-vertical::before {
  content: "\\FF6E";
}

.mdi-folder::before {
  content: "\\F24B";
}

.mdi-folder-account::before {
  content: "\\F24C";
}

.mdi-folder-account-outline::before {
  content: "\\FB78";
}

.mdi-folder-alert::before {
  content: "\\FDA8";
}

.mdi-folder-alert-outline::before {
  content: "\\FDA9";
}

.mdi-folder-clock::before {
  content: "\\FAB9";
}

.mdi-folder-clock-outline::before {
  content: "\\FABA";
}

.mdi-folder-download::before {
  content: "\\F24D";
}

.mdi-folder-download-outline::before {
  content: "\\F0114";
}

.mdi-folder-edit::before {
  content: "\\F8DD";
}

.mdi-folder-edit-outline::before {
  content: "\\FDAA";
}

.mdi-folder-google-drive::before {
  content: "\\F24E";
}

.mdi-folder-heart::before {
  content: "\\F0115";
}

.mdi-folder-heart-outline::before {
  content: "\\F0116";
}

.mdi-folder-home::before {
  content: "\\F00E0";
}

.mdi-folder-home-outline::before {
  content: "\\F00E1";
}

.mdi-folder-image::before {
  content: "\\F24F";
}

.mdi-folder-information::before {
  content: "\\F00E2";
}

.mdi-folder-information-outline::before {
  content: "\\F00E3";
}

.mdi-folder-key::before {
  content: "\\F8AB";
}

.mdi-folder-key-network::before {
  content: "\\F8AC";
}

.mdi-folder-key-network-outline::before {
  content: "\\FC5C";
}

.mdi-folder-key-outline::before {
  content: "\\F0117";
}

.mdi-folder-lock::before {
  content: "\\F250";
}

.mdi-folder-lock-open::before {
  content: "\\F251";
}

.mdi-folder-marker::before {
  content: "\\F0298";
}

.mdi-folder-marker-outline::before {
  content: "\\F0299";
}

.mdi-folder-move::before {
  content: "\\F252";
}

.mdi-folder-move-outline::before {
  content: "\\F0271";
}

.mdi-folder-multiple::before {
  content: "\\F253";
}

.mdi-folder-multiple-image::before {
  content: "\\F254";
}

.mdi-folder-multiple-outline::before {
  content: "\\F255";
}

.mdi-folder-network::before {
  content: "\\F86F";
}

.mdi-folder-network-outline::before {
  content: "\\FC5D";
}

.mdi-folder-open::before {
  content: "\\F76F";
}

.mdi-folder-open-outline::before {
  content: "\\FDAB";
}

.mdi-folder-outline::before {
  content: "\\F256";
}

.mdi-folder-plus::before {
  content: "\\F257";
}

.mdi-folder-plus-outline::before {
  content: "\\FB79";
}

.mdi-folder-pound::before {
  content: "\\FCE5";
}

.mdi-folder-pound-outline::before {
  content: "\\FCE6";
}

.mdi-folder-remove::before {
  content: "\\F258";
}

.mdi-folder-remove-outline::before {
  content: "\\FB7A";
}

.mdi-folder-search::before {
  content: "\\F967";
}

.mdi-folder-search-outline::before {
  content: "\\F968";
}

.mdi-folder-settings::before {
  content: "\\F00A8";
}

.mdi-folder-settings-outline::before {
  content: "\\F00A9";
}

.mdi-folder-settings-variant::before {
  content: "\\F00AA";
}

.mdi-folder-settings-variant-outline::before {
  content: "\\F00AB";
}

.mdi-folder-star::before {
  content: "\\F69C";
}

.mdi-folder-star-outline::before {
  content: "\\FB7B";
}

.mdi-folder-swap::before {
  content: "\\FFD6";
}

.mdi-folder-swap-outline::before {
  content: "\\FFD7";
}

.mdi-folder-sync::before {
  content: "\\FCE7";
}

.mdi-folder-sync-outline::before {
  content: "\\FCE8";
}

.mdi-folder-table::before {
  content: "\\F030E";
}

.mdi-folder-table-outline::before {
  content: "\\F030F";
}

.mdi-folder-text::before {
  content: "\\FC5E";
}

.mdi-folder-text-outline::before {
  content: "\\FC5F";
}

.mdi-folder-upload::before {
  content: "\\F259";
}

.mdi-folder-upload-outline::before {
  content: "\\F0118";
}

.mdi-folder-zip::before {
  content: "\\F6EA";
}

.mdi-folder-zip-outline::before {
  content: "\\F7B8";
}

.mdi-font-awesome::before {
  content: "\\F03A";
}

.mdi-food::before {
  content: "\\F25A";
}

.mdi-food-apple::before {
  content: "\\F25B";
}

.mdi-food-apple-outline::before {
  content: "\\FC60";
}

.mdi-food-croissant::before {
  content: "\\F7C7";
}

.mdi-food-fork-drink::before {
  content: "\\F5F2";
}

.mdi-food-off::before {
  content: "\\F5F3";
}

.mdi-food-variant::before {
  content: "\\F25C";
}

.mdi-foot-print::before {
  content: "\\FF6F";
}

.mdi-football::before {
  content: "\\F25D";
}

.mdi-football-australian::before {
  content: "\\F25E";
}

.mdi-football-helmet::before {
  content: "\\F25F";
}

.mdi-forklift::before {
  content: "\\F7C8";
}

.mdi-format-align-bottom::before {
  content: "\\F752";
}

.mdi-format-align-center::before {
  content: "\\F260";
}

.mdi-format-align-justify::before {
  content: "\\F261";
}

.mdi-format-align-left::before {
  content: "\\F262";
}

.mdi-format-align-middle::before {
  content: "\\F753";
}

.mdi-format-align-right::before {
  content: "\\F263";
}

.mdi-format-align-top::before {
  content: "\\F754";
}

.mdi-format-annotation-minus::before {
  content: "\\FABB";
}

.mdi-format-annotation-plus::before {
  content: "\\F646";
}

.mdi-format-bold::before {
  content: "\\F264";
}

.mdi-format-clear::before {
  content: "\\F265";
}

.mdi-format-color-fill::before {
  content: "\\F266";
}

.mdi-format-color-highlight::before {
  content: "\\FE14";
}

.mdi-format-color-marker-cancel::before {
  content: "\\F033E";
}

.mdi-format-color-text::before {
  content: "\\F69D";
}

.mdi-format-columns::before {
  content: "\\F8DE";
}

.mdi-format-float-center::before {
  content: "\\F267";
}

.mdi-format-float-left::before {
  content: "\\F268";
}

.mdi-format-float-none::before {
  content: "\\F269";
}

.mdi-format-float-right::before {
  content: "\\F26A";
}

.mdi-format-font::before {
  content: "\\F6D5";
}

.mdi-format-font-size-decrease::before {
  content: "\\F9F2";
}

.mdi-format-font-size-increase::before {
  content: "\\F9F3";
}

.mdi-format-header-1::before {
  content: "\\F26B";
}

.mdi-format-header-2::before {
  content: "\\F26C";
}

.mdi-format-header-3::before {
  content: "\\F26D";
}

.mdi-format-header-4::before {
  content: "\\F26E";
}

.mdi-format-header-5::before {
  content: "\\F26F";
}

.mdi-format-header-6::before {
  content: "\\F270";
}

.mdi-format-header-decrease::before {
  content: "\\F271";
}

.mdi-format-header-equal::before {
  content: "\\F272";
}

.mdi-format-header-increase::before {
  content: "\\F273";
}

.mdi-format-header-pound::before {
  content: "\\F274";
}

.mdi-format-horizontal-align-center::before {
  content: "\\F61E";
}

.mdi-format-horizontal-align-left::before {
  content: "\\F61F";
}

.mdi-format-horizontal-align-right::before {
  content: "\\F620";
}

.mdi-format-indent-decrease::before {
  content: "\\F275";
}

.mdi-format-indent-increase::before {
  content: "\\F276";
}

.mdi-format-italic::before {
  content: "\\F277";
}

.mdi-format-letter-case::before {
  content: "\\FB19";
}

.mdi-format-letter-case-lower::before {
  content: "\\FB1A";
}

.mdi-format-letter-case-upper::before {
  content: "\\FB1B";
}

.mdi-format-letter-ends-with::before {
  content: "\\FFD8";
}

.mdi-format-letter-matches::before {
  content: "\\FFD9";
}

.mdi-format-letter-starts-with::before {
  content: "\\FFDA";
}

.mdi-format-line-spacing::before {
  content: "\\F278";
}

.mdi-format-line-style::before {
  content: "\\F5C8";
}

.mdi-format-line-weight::before {
  content: "\\F5C9";
}

.mdi-format-list-bulleted::before {
  content: "\\F279";
}

.mdi-format-list-bulleted-square::before {
  content: "\\FDAC";
}

.mdi-format-list-bulleted-triangle::before {
  content: "\\FECF";
}

.mdi-format-list-bulleted-type::before {
  content: "\\F27A";
}

.mdi-format-list-checkbox::before {
  content: "\\F969";
}

.mdi-format-list-checks::before {
  content: "\\F755";
}

.mdi-format-list-numbered::before {
  content: "\\F27B";
}

.mdi-format-list-numbered-rtl::before {
  content: "\\FCE9";
}

.mdi-format-list-text::before {
  content: "\\F029A";
}

.mdi-format-overline::before {
  content: "\\FED0";
}

.mdi-format-page-break::before {
  content: "\\F6D6";
}

.mdi-format-paint::before {
  content: "\\F27C";
}

.mdi-format-paragraph::before {
  content: "\\F27D";
}

.mdi-format-pilcrow::before {
  content: "\\F6D7";
}

.mdi-format-quote-close::before {
  content: "\\F27E";
}

.mdi-format-quote-close-outline::before {
  content: "\\F01D3";
}

.mdi-format-quote-open::before {
  content: "\\F756";
}

.mdi-format-quote-open-outline::before {
  content: "\\F01D2";
}

.mdi-format-rotate-90::before {
  content: "\\F6A9";
}

.mdi-format-section::before {
  content: "\\F69E";
}

.mdi-format-size::before {
  content: "\\F27F";
}

.mdi-format-strikethrough::before {
  content: "\\F280";
}

.mdi-format-strikethrough-variant::before {
  content: "\\F281";
}

.mdi-format-subscript::before {
  content: "\\F282";
}

.mdi-format-superscript::before {
  content: "\\F283";
}

.mdi-format-text::before {
  content: "\\F284";
}

.mdi-format-text-rotation-angle-down::before {
  content: "\\FFDB";
}

.mdi-format-text-rotation-angle-up::before {
  content: "\\FFDC";
}

.mdi-format-text-rotation-down::before {
  content: "\\FD4F";
}

.mdi-format-text-rotation-down-vertical::before {
  content: "\\FFDD";
}

.mdi-format-text-rotation-none::before {
  content: "\\FD50";
}

.mdi-format-text-rotation-up::before {
  content: "\\FFDE";
}

.mdi-format-text-rotation-vertical::before {
  content: "\\FFDF";
}

.mdi-format-text-variant::before {
  content: "\\FE15";
}

.mdi-format-text-wrapping-clip::before {
  content: "\\FCEA";
}

.mdi-format-text-wrapping-overflow::before {
  content: "\\FCEB";
}

.mdi-format-text-wrapping-wrap::before {
  content: "\\FCEC";
}

.mdi-format-textbox::before {
  content: "\\FCED";
}

.mdi-format-textdirection-l-to-r::before {
  content: "\\F285";
}

.mdi-format-textdirection-r-to-l::before {
  content: "\\F286";
}

.mdi-format-title::before {
  content: "\\F5F4";
}

.mdi-format-underline::before {
  content: "\\F287";
}

.mdi-format-vertical-align-bottom::before {
  content: "\\F621";
}

.mdi-format-vertical-align-center::before {
  content: "\\F622";
}

.mdi-format-vertical-align-top::before {
  content: "\\F623";
}

.mdi-format-wrap-inline::before {
  content: "\\F288";
}

.mdi-format-wrap-square::before {
  content: "\\F289";
}

.mdi-format-wrap-tight::before {
  content: "\\F28A";
}

.mdi-format-wrap-top-bottom::before {
  content: "\\F28B";
}

.mdi-forum::before {
  content: "\\F28C";
}

.mdi-forum-outline::before {
  content: "\\F821";
}

.mdi-forward::before {
  content: "\\F28D";
}

.mdi-forwardburger::before {
  content: "\\FD51";
}

.mdi-fountain::before {
  content: "\\F96A";
}

.mdi-fountain-pen::before {
  content: "\\FCEE";
}

.mdi-fountain-pen-tip::before {
  content: "\\FCEF";
}

.mdi-foursquare::before {
  content: "\\F28E";
}

.mdi-freebsd::before {
  content: "\\F8DF";
}

.mdi-frequently-asked-questions::before {
  content: "\\FED1";
}

.mdi-fridge::before {
  content: "\\F290";
}

.mdi-fridge-alert::before {
  content: "\\F01DC";
}

.mdi-fridge-alert-outline::before {
  content: "\\F01DD";
}

.mdi-fridge-bottom::before {
  content: "\\F292";
}

.mdi-fridge-off::before {
  content: "\\F01DA";
}

.mdi-fridge-off-outline::before {
  content: "\\F01DB";
}

.mdi-fridge-outline::before {
  content: "\\F28F";
}

.mdi-fridge-top::before {
  content: "\\F291";
}

.mdi-fruit-cherries::before {
  content: "\\F0064";
}

.mdi-fruit-citrus::before {
  content: "\\F0065";
}

.mdi-fruit-grapes::before {
  content: "\\F0066";
}

.mdi-fruit-grapes-outline::before {
  content: "\\F0067";
}

.mdi-fruit-pineapple::before {
  content: "\\F0068";
}

.mdi-fruit-watermelon::before {
  content: "\\F0069";
}

.mdi-fuel::before {
  content: "\\F7C9";
}

.mdi-fullscreen::before {
  content: "\\F293";
}

.mdi-fullscreen-exit::before {
  content: "\\F294";
}

.mdi-function::before {
  content: "\\F295";
}

.mdi-function-variant::before {
  content: "\\F870";
}

.mdi-furigana-horizontal::before {
  content: "\\F00AC";
}

.mdi-furigana-vertical::before {
  content: "\\F00AD";
}

.mdi-fuse::before {
  content: "\\FC61";
}

.mdi-fuse-blade::before {
  content: "\\FC62";
}

.mdi-gamepad::before {
  content: "\\F296";
}

.mdi-gamepad-circle::before {
  content: "\\FE16";
}

.mdi-gamepad-circle-down::before {
  content: "\\FE17";
}

.mdi-gamepad-circle-left::before {
  content: "\\FE18";
}

.mdi-gamepad-circle-outline::before {
  content: "\\FE19";
}

.mdi-gamepad-circle-right::before {
  content: "\\FE1A";
}

.mdi-gamepad-circle-up::before {
  content: "\\FE1B";
}

.mdi-gamepad-down::before {
  content: "\\FE1C";
}

.mdi-gamepad-left::before {
  content: "\\FE1D";
}

.mdi-gamepad-right::before {
  content: "\\FE1E";
}

.mdi-gamepad-round::before {
  content: "\\FE1F";
}

.mdi-gamepad-round-down::before {
  content: "\\FE7E";
}

.mdi-gamepad-round-left::before {
  content: "\\FE7F";
}

.mdi-gamepad-round-outline::before {
  content: "\\FE80";
}

.mdi-gamepad-round-right::before {
  content: "\\FE81";
}

.mdi-gamepad-round-up::before {
  content: "\\FE82";
}

.mdi-gamepad-square::before {
  content: "\\FED2";
}

.mdi-gamepad-square-outline::before {
  content: "\\FED3";
}

.mdi-gamepad-up::before {
  content: "\\FE83";
}

.mdi-gamepad-variant::before {
  content: "\\F297";
}

.mdi-gamepad-variant-outline::before {
  content: "\\FED4";
}

.mdi-gamma::before {
  content: "\\F0119";
}

.mdi-gantry-crane::before {
  content: "\\FDAD";
}

.mdi-garage::before {
  content: "\\F6D8";
}

.mdi-garage-alert::before {
  content: "\\F871";
}

.mdi-garage-alert-variant::before {
  content: "\\F0300";
}

.mdi-garage-open::before {
  content: "\\F6D9";
}

.mdi-garage-open-variant::before {
  content: "\\F02FF";
}

.mdi-garage-variant::before {
  content: "\\F02FE";
}

.mdi-gas-cylinder::before {
  content: "\\F647";
}

.mdi-gas-station::before {
  content: "\\F298";
}

.mdi-gas-station-outline::before {
  content: "\\FED5";
}

.mdi-gate::before {
  content: "\\F299";
}

.mdi-gate-and::before {
  content: "\\F8E0";
}

.mdi-gate-arrow-right::before {
  content: "\\F0194";
}

.mdi-gate-nand::before {
  content: "\\F8E1";
}

.mdi-gate-nor::before {
  content: "\\F8E2";
}

.mdi-gate-not::before {
  content: "\\F8E3";
}

.mdi-gate-open::before {
  content: "\\F0195";
}

.mdi-gate-or::before {
  content: "\\F8E4";
}

.mdi-gate-xnor::before {
  content: "\\F8E5";
}

.mdi-gate-xor::before {
  content: "\\F8E6";
}

.mdi-gatsby::before {
  content: "\\FE84";
}

.mdi-gauge::before {
  content: "\\F29A";
}

.mdi-gauge-empty::before {
  content: "\\F872";
}

.mdi-gauge-full::before {
  content: "\\F873";
}

.mdi-gauge-low::before {
  content: "\\F874";
}

.mdi-gavel::before {
  content: "\\F29B";
}

.mdi-gender-female::before {
  content: "\\F29C";
}

.mdi-gender-male::before {
  content: "\\F29D";
}

.mdi-gender-male-female::before {
  content: "\\F29E";
}

.mdi-gender-male-female-variant::before {
  content: "\\F016A";
}

.mdi-gender-non-binary::before {
  content: "\\F016B";
}

.mdi-gender-transgender::before {
  content: "\\F29F";
}

.mdi-gentoo::before {
  content: "\\F8E7";
}

.mdi-gesture::before {
  content: "\\F7CA";
}

.mdi-gesture-double-tap::before {
  content: "\\F73B";
}

.mdi-gesture-pinch::before {
  content: "\\FABC";
}

.mdi-gesture-spread::before {
  content: "\\FABD";
}

.mdi-gesture-swipe::before {
  content: "\\FD52";
}

.mdi-gesture-swipe-down::before {
  content: "\\F73C";
}

.mdi-gesture-swipe-horizontal::before {
  content: "\\FABE";
}

.mdi-gesture-swipe-left::before {
  content: "\\F73D";
}

.mdi-gesture-swipe-right::before {
  content: "\\F73E";
}

.mdi-gesture-swipe-up::before {
  content: "\\F73F";
}

.mdi-gesture-swipe-vertical::before {
  content: "\\FABF";
}

.mdi-gesture-tap::before {
  content: "\\F740";
}

.mdi-gesture-tap-box::before {
  content: "\\F02D4";
}

.mdi-gesture-tap-button::before {
  content: "\\F02D3";
}

.mdi-gesture-tap-hold::before {
  content: "\\FD53";
}

.mdi-gesture-two-double-tap::before {
  content: "\\F741";
}

.mdi-gesture-two-tap::before {
  content: "\\F742";
}

.mdi-ghost::before {
  content: "\\F2A0";
}

.mdi-ghost-off::before {
  content: "\\F9F4";
}

.mdi-gif::before {
  content: "\\FD54";
}

.mdi-gift::before {
  content: "\\FE85";
}

.mdi-gift-outline::before {
  content: "\\F2A1";
}

.mdi-git::before {
  content: "\\F2A2";
}

.mdi-github-box::before {
  content: "\\F2A3";
}

.mdi-github-circle::before {
  content: "\\F2A4";
}

.mdi-github-face::before {
  content: "\\F6DA";
}

.mdi-gitlab::before {
  content: "\\FB7C";
}

.mdi-glass-cocktail::before {
  content: "\\F356";
}

.mdi-glass-flute::before {
  content: "\\F2A5";
}

.mdi-glass-mug::before {
  content: "\\F2A6";
}

.mdi-glass-mug-variant::before {
  content: "\\F0141";
}

.mdi-glass-pint-outline::before {
  content: "\\F0338";
}

.mdi-glass-stange::before {
  content: "\\F2A7";
}

.mdi-glass-tulip::before {
  content: "\\F2A8";
}

.mdi-glass-wine::before {
  content: "\\F875";
}

.mdi-glassdoor::before {
  content: "\\F2A9";
}

.mdi-glasses::before {
  content: "\\F2AA";
}

.mdi-globe-light::before {
  content: "\\F0302";
}

.mdi-globe-model::before {
  content: "\\F8E8";
}

.mdi-gmail::before {
  content: "\\F2AB";
}

.mdi-gnome::before {
  content: "\\F2AC";
}

.mdi-go-kart::before {
  content: "\\FD55";
}

.mdi-go-kart-track::before {
  content: "\\FD56";
}

.mdi-gog::before {
  content: "\\FB7D";
}

.mdi-gold::before {
  content: "\\F027A";
}

.mdi-golf::before {
  content: "\\F822";
}

.mdi-golf-cart::before {
  content: "\\F01CF";
}

.mdi-golf-tee::before {
  content: "\\F00AE";
}

.mdi-gondola::before {
  content: "\\F685";
}

.mdi-goodreads::before {
  content: "\\FD57";
}

.mdi-google::before {
  content: "\\F2AD";
}

.mdi-google-adwords::before {
  content: "\\FC63";
}

.mdi-google-analytics::before {
  content: "\\F7CB";
}

.mdi-google-assistant::before {
  content: "\\F7CC";
}

.mdi-google-cardboard::before {
  content: "\\F2AE";
}

.mdi-google-chrome::before {
  content: "\\F2AF";
}

.mdi-google-circles::before {
  content: "\\F2B0";
}

.mdi-google-circles-communities::before {
  content: "\\F2B1";
}

.mdi-google-circles-extended::before {
  content: "\\F2B2";
}

.mdi-google-circles-group::before {
  content: "\\F2B3";
}

.mdi-google-classroom::before {
  content: "\\F2C0";
}

.mdi-google-cloud::before {
  content: "\\F0221";
}

.mdi-google-controller::before {
  content: "\\F2B4";
}

.mdi-google-controller-off::before {
  content: "\\F2B5";
}

.mdi-google-drive::before {
  content: "\\F2B6";
}

.mdi-google-earth::before {
  content: "\\F2B7";
}

.mdi-google-fit::before {
  content: "\\F96B";
}

.mdi-google-glass::before {
  content: "\\F2B8";
}

.mdi-google-hangouts::before {
  content: "\\F2C9";
}

.mdi-google-home::before {
  content: "\\F823";
}

.mdi-google-keep::before {
  content: "\\F6DB";
}

.mdi-google-lens::before {
  content: "\\F9F5";
}

.mdi-google-maps::before {
  content: "\\F5F5";
}

.mdi-google-my-business::before {
  content: "\\F006A";
}

.mdi-google-nearby::before {
  content: "\\F2B9";
}

.mdi-google-pages::before {
  content: "\\F2BA";
}

.mdi-google-photos::before {
  content: "\\F6DC";
}

.mdi-google-physical-web::before {
  content: "\\F2BB";
}

.mdi-google-play::before {
  content: "\\F2BC";
}

.mdi-google-plus::before {
  content: "\\F2BD";
}

.mdi-google-plus-box::before {
  content: "\\F2BE";
}

.mdi-google-podcast::before {
  content: "\\FED6";
}

.mdi-google-spreadsheet::before {
  content: "\\F9F6";
}

.mdi-google-street-view::before {
  content: "\\FC64";
}

.mdi-google-translate::before {
  content: "\\F2BF";
}

.mdi-gradient::before {
  content: "\\F69F";
}

.mdi-grain::before {
  content: "\\FD58";
}

.mdi-graph::before {
  content: "\\F006B";
}

.mdi-graph-outline::before {
  content: "\\F006C";
}

.mdi-graphql::before {
  content: "\\F876";
}

.mdi-grave-stone::before {
  content: "\\FB7E";
}

.mdi-grease-pencil::before {
  content: "\\F648";
}

.mdi-greater-than::before {
  content: "\\F96C";
}

.mdi-greater-than-or-equal::before {
  content: "\\F96D";
}

.mdi-grid::before {
  content: "\\F2C1";
}

.mdi-grid-large::before {
  content: "\\F757";
}

.mdi-grid-off::before {
  content: "\\F2C2";
}

.mdi-grill::before {
  content: "\\FE86";
}

.mdi-grill-outline::before {
  content: "\\F01B5";
}

.mdi-group::before {
  content: "\\F2C3";
}

.mdi-guitar-acoustic::before {
  content: "\\F770";
}

.mdi-guitar-electric::before {
  content: "\\F2C4";
}

.mdi-guitar-pick::before {
  content: "\\F2C5";
}

.mdi-guitar-pick-outline::before {
  content: "\\F2C6";
}

.mdi-guy-fawkes-mask::before {
  content: "\\F824";
}

.mdi-hackernews::before {
  content: "\\F624";
}

.mdi-hail::before {
  content: "\\FAC0";
}

.mdi-hair-dryer::before {
  content: "\\F011A";
}

.mdi-hair-dryer-outline::before {
  content: "\\F011B";
}

.mdi-halloween::before {
  content: "\\FB7F";
}

.mdi-hamburger::before {
  content: "\\F684";
}

.mdi-hammer::before {
  content: "\\F8E9";
}

.mdi-hand::before {
  content: "\\FA4E";
}

.mdi-hand-heart::before {
  content: "\\F011C";
}

.mdi-hand-left::before {
  content: "\\FE87";
}

.mdi-hand-okay::before {
  content: "\\FA4F";
}

.mdi-hand-peace::before {
  content: "\\FA50";
}

.mdi-hand-peace-variant::before {
  content: "\\FA51";
}

.mdi-hand-pointing-down::before {
  content: "\\FA52";
}

.mdi-hand-pointing-left::before {
  content: "\\FA53";
}

.mdi-hand-pointing-right::before {
  content: "\\F2C7";
}

.mdi-hand-pointing-up::before {
  content: "\\FA54";
}

.mdi-hand-right::before {
  content: "\\FE88";
}

.mdi-hand-saw::before {
  content: "\\FE89";
}

.mdi-handball::before {
  content: "\\FF70";
}

.mdi-handcuffs::before {
  content: "\\F0169";
}

.mdi-handshake::before {
  content: "\\F0243";
}

.mdi-hanger::before {
  content: "\\F2C8";
}

.mdi-hard-hat::before {
  content: "\\F96E";
}

.mdi-harddisk::before {
  content: "\\F2CA";
}

.mdi-harddisk-plus::before {
  content: "\\F006D";
}

.mdi-harddisk-remove::before {
  content: "\\F006E";
}

.mdi-hat-fedora::before {
  content: "\\FB80";
}

.mdi-hazard-lights::before {
  content: "\\FC65";
}

.mdi-hdr::before {
  content: "\\FD59";
}

.mdi-hdr-off::before {
  content: "\\FD5A";
}

.mdi-headphones::before {
  content: "\\F2CB";
}

.mdi-headphones-bluetooth::before {
  content: "\\F96F";
}

.mdi-headphones-box::before {
  content: "\\F2CC";
}

.mdi-headphones-off::before {
  content: "\\F7CD";
}

.mdi-headphones-settings::before {
  content: "\\F2CD";
}

.mdi-headset::before {
  content: "\\F2CE";
}

.mdi-headset-dock::before {
  content: "\\F2CF";
}

.mdi-headset-off::before {
  content: "\\F2D0";
}

.mdi-heart::before {
  content: "\\F2D1";
}

.mdi-heart-box::before {
  content: "\\F2D2";
}

.mdi-heart-box-outline::before {
  content: "\\F2D3";
}

.mdi-heart-broken::before {
  content: "\\F2D4";
}

.mdi-heart-broken-outline::before {
  content: "\\FCF0";
}

.mdi-heart-circle::before {
  content: "\\F970";
}

.mdi-heart-circle-outline::before {
  content: "\\F971";
}

.mdi-heart-flash::before {
  content: "\\FF16";
}

.mdi-heart-half::before {
  content: "\\F6DE";
}

.mdi-heart-half-full::before {
  content: "\\F6DD";
}

.mdi-heart-half-outline::before {
  content: "\\F6DF";
}

.mdi-heart-multiple::before {
  content: "\\FA55";
}

.mdi-heart-multiple-outline::before {
  content: "\\FA56";
}

.mdi-heart-off::before {
  content: "\\F758";
}

.mdi-heart-outline::before {
  content: "\\F2D5";
}

.mdi-heart-pulse::before {
  content: "\\F5F6";
}

.mdi-helicopter::before {
  content: "\\FAC1";
}

.mdi-help::before {
  content: "\\F2D6";
}

.mdi-help-box::before {
  content: "\\F78A";
}

.mdi-help-circle::before {
  content: "\\F2D7";
}

.mdi-help-circle-outline::before {
  content: "\\F625";
}

.mdi-help-network::before {
  content: "\\F6F4";
}

.mdi-help-network-outline::before {
  content: "\\FC66";
}

.mdi-help-rhombus::before {
  content: "\\FB81";
}

.mdi-help-rhombus-outline::before {
  content: "\\FB82";
}

.mdi-hexadecimal::before {
  content: "\\F02D2";
}

.mdi-hexagon::before {
  content: "\\F2D8";
}

.mdi-hexagon-multiple::before {
  content: "\\F6E0";
}

.mdi-hexagon-multiple-outline::before {
  content: "\\F011D";
}

.mdi-hexagon-outline::before {
  content: "\\F2D9";
}

.mdi-hexagon-slice-1::before {
  content: "\\FAC2";
}

.mdi-hexagon-slice-2::before {
  content: "\\FAC3";
}

.mdi-hexagon-slice-3::before {
  content: "\\FAC4";
}

.mdi-hexagon-slice-4::before {
  content: "\\FAC5";
}

.mdi-hexagon-slice-5::before {
  content: "\\FAC6";
}

.mdi-hexagon-slice-6::before {
  content: "\\FAC7";
}

.mdi-hexagram::before {
  content: "\\FAC8";
}

.mdi-hexagram-outline::before {
  content: "\\FAC9";
}

.mdi-high-definition::before {
  content: "\\F7CE";
}

.mdi-high-definition-box::before {
  content: "\\F877";
}

.mdi-highway::before {
  content: "\\F5F7";
}

.mdi-hiking::before {
  content: "\\FD5B";
}

.mdi-hinduism::before {
  content: "\\F972";
}

.mdi-history::before {
  content: "\\F2DA";
}

.mdi-hockey-puck::before {
  content: "\\F878";
}

.mdi-hockey-sticks::before {
  content: "\\F879";
}

.mdi-hololens::before {
  content: "\\F2DB";
}

.mdi-home::before {
  content: "\\F2DC";
}

.mdi-home-account::before {
  content: "\\F825";
}

.mdi-home-alert::before {
  content: "\\F87A";
}

.mdi-home-analytics::before {
  content: "\\FED7";
}

.mdi-home-assistant::before {
  content: "\\F7CF";
}

.mdi-home-automation::before {
  content: "\\F7D0";
}

.mdi-home-circle::before {
  content: "\\F7D1";
}

.mdi-home-circle-outline::before {
  content: "\\F006F";
}

.mdi-home-city::before {
  content: "\\FCF1";
}

.mdi-home-city-outline::before {
  content: "\\FCF2";
}

.mdi-home-currency-usd::before {
  content: "\\F8AE";
}

.mdi-home-edit::before {
  content: "\\F0184";
}

.mdi-home-edit-outline::before {
  content: "\\F0185";
}

.mdi-home-export-outline::before {
  content: "\\FFB8";
}

.mdi-home-flood::before {
  content: "\\FF17";
}

.mdi-home-floor-0::before {
  content: "\\FDAE";
}

.mdi-home-floor-1::before {
  content: "\\FD5C";
}

.mdi-home-floor-2::before {
  content: "\\FD5D";
}

.mdi-home-floor-3::before {
  content: "\\FD5E";
}

.mdi-home-floor-a::before {
  content: "\\FD5F";
}

.mdi-home-floor-b::before {
  content: "\\FD60";
}

.mdi-home-floor-g::before {
  content: "\\FD61";
}

.mdi-home-floor-l::before {
  content: "\\FD62";
}

.mdi-home-floor-negative-1::before {
  content: "\\FDAF";
}

.mdi-home-group::before {
  content: "\\FDB0";
}

.mdi-home-heart::before {
  content: "\\F826";
}

.mdi-home-import-outline::before {
  content: "\\FFB9";
}

.mdi-home-lightbulb::before {
  content: "\\F027C";
}

.mdi-home-lightbulb-outline::before {
  content: "\\F027D";
}

.mdi-home-lock::before {
  content: "\\F8EA";
}

.mdi-home-lock-open::before {
  content: "\\F8EB";
}

.mdi-home-map-marker::before {
  content: "\\F5F8";
}

.mdi-home-minus::before {
  content: "\\F973";
}

.mdi-home-modern::before {
  content: "\\F2DD";
}

.mdi-home-outline::before {
  content: "\\F6A0";
}

.mdi-home-plus::before {
  content: "\\F974";
}

.mdi-home-remove::before {
  content: "\\F0272";
}

.mdi-home-roof::before {
  content: "\\F0156";
}

.mdi-home-thermometer::before {
  content: "\\FF71";
}

.mdi-home-thermometer-outline::before {
  content: "\\FF72";
}

.mdi-home-variant::before {
  content: "\\F2DE";
}

.mdi-home-variant-outline::before {
  content: "\\FB83";
}

.mdi-hook::before {
  content: "\\F6E1";
}

.mdi-hook-off::before {
  content: "\\F6E2";
}

.mdi-hops::before {
  content: "\\F2DF";
}

.mdi-horizontal-rotate-clockwise::before {
  content: "\\F011E";
}

.mdi-horizontal-rotate-counterclockwise::before {
  content: "\\F011F";
}

.mdi-horseshoe::before {
  content: "\\FA57";
}

.mdi-hospital::before {
  content: "\\F0017";
}

.mdi-hospital-box::before {
  content: "\\F2E0";
}

.mdi-hospital-box-outline::before {
  content: "\\F0018";
}

.mdi-hospital-building::before {
  content: "\\F2E1";
}

.mdi-hospital-marker::before {
  content: "\\F2E2";
}

.mdi-hot-tub::before {
  content: "\\F827";
}

.mdi-hotel::before {
  content: "\\F2E3";
}

.mdi-houzz::before {
  content: "\\F2E4";
}

.mdi-houzz-box::before {
  content: "\\F2E5";
}

.mdi-hubspot::before {
  content: "\\FCF3";
}

.mdi-hulu::before {
  content: "\\F828";
}

.mdi-human::before {
  content: "\\F2E6";
}

.mdi-human-child::before {
  content: "\\F2E7";
}

.mdi-human-female::before {
  content: "\\F649";
}

.mdi-human-female-boy::before {
  content: "\\FA58";
}

.mdi-human-female-female::before {
  content: "\\FA59";
}

.mdi-human-female-girl::before {
  content: "\\FA5A";
}

.mdi-human-greeting::before {
  content: "\\F64A";
}

.mdi-human-handsdown::before {
  content: "\\F64B";
}

.mdi-human-handsup::before {
  content: "\\F64C";
}

.mdi-human-male::before {
  content: "\\F64D";
}

.mdi-human-male-boy::before {
  content: "\\FA5B";
}

.mdi-human-male-female::before {
  content: "\\F2E8";
}

.mdi-human-male-girl::before {
  content: "\\FA5C";
}

.mdi-human-male-height::before {
  content: "\\FF18";
}

.mdi-human-male-height-variant::before {
  content: "\\FF19";
}

.mdi-human-male-male::before {
  content: "\\FA5D";
}

.mdi-human-pregnant::before {
  content: "\\F5CF";
}

.mdi-humble-bundle::before {
  content: "\\F743";
}

.mdi-hydro-power::before {
  content: "\\F0310";
}

.mdi-ice-cream::before {
  content: "\\F829";
}

.mdi-ice-pop::before {
  content: "\\FF1A";
}

.mdi-id-card::before {
  content: "\\FFE0";
}

.mdi-identifier::before {
  content: "\\FF1B";
}

.mdi-iframe::before {
  content: "\\FC67";
}

.mdi-iframe-array::before {
  content: "\\F0120";
}

.mdi-iframe-array-outline::before {
  content: "\\F0121";
}

.mdi-iframe-braces::before {
  content: "\\F0122";
}

.mdi-iframe-braces-outline::before {
  content: "\\F0123";
}

.mdi-iframe-outline::before {
  content: "\\FC68";
}

.mdi-iframe-parentheses::before {
  content: "\\F0124";
}

.mdi-iframe-parentheses-outline::before {
  content: "\\F0125";
}

.mdi-iframe-variable::before {
  content: "\\F0126";
}

.mdi-iframe-variable-outline::before {
  content: "\\F0127";
}

.mdi-image::before {
  content: "\\F2E9";
}

.mdi-image-album::before {
  content: "\\F2EA";
}

.mdi-image-area::before {
  content: "\\F2EB";
}

.mdi-image-area-close::before {
  content: "\\F2EC";
}

.mdi-image-auto-adjust::before {
  content: "\\FFE1";
}

.mdi-image-broken::before {
  content: "\\F2ED";
}

.mdi-image-broken-variant::before {
  content: "\\F2EE";
}

.mdi-image-edit::before {
  content: "\\F020E";
}

.mdi-image-edit-outline::before {
  content: "\\F020F";
}

.mdi-image-filter::before {
  content: "\\F2EF";
}

.mdi-image-filter-black-white::before {
  content: "\\F2F0";
}

.mdi-image-filter-center-focus::before {
  content: "\\F2F1";
}

.mdi-image-filter-center-focus-strong::before {
  content: "\\FF1C";
}

.mdi-image-filter-center-focus-strong-outline::before {
  content: "\\FF1D";
}

.mdi-image-filter-center-focus-weak::before {
  content: "\\F2F2";
}

.mdi-image-filter-drama::before {
  content: "\\F2F3";
}

.mdi-image-filter-frames::before {
  content: "\\F2F4";
}

.mdi-image-filter-hdr::before {
  content: "\\F2F5";
}

.mdi-image-filter-none::before {
  content: "\\F2F6";
}

.mdi-image-filter-tilt-shift::before {
  content: "\\F2F7";
}

.mdi-image-filter-vintage::before {
  content: "\\F2F8";
}

.mdi-image-frame::before {
  content: "\\FE8A";
}

.mdi-image-move::before {
  content: "\\F9F7";
}

.mdi-image-multiple::before {
  content: "\\F2F9";
}

.mdi-image-off::before {
  content: "\\F82A";
}

.mdi-image-off-outline::before {
  content: "\\F01FC";
}

.mdi-image-outline::before {
  content: "\\F975";
}

.mdi-image-plus::before {
  content: "\\F87B";
}

.mdi-image-search::before {
  content: "\\F976";
}

.mdi-image-search-outline::before {
  content: "\\F977";
}

.mdi-image-size-select-actual::before {
  content: "\\FC69";
}

.mdi-image-size-select-large::before {
  content: "\\FC6A";
}

.mdi-image-size-select-small::before {
  content: "\\FC6B";
}

.mdi-import::before {
  content: "\\F2FA";
}

.mdi-inbox::before {
  content: "\\F686";
}

.mdi-inbox-arrow-down::before {
  content: "\\F2FB";
}

.mdi-inbox-arrow-down-outline::before {
  content: "\\F029B";
}

.mdi-inbox-arrow-up::before {
  content: "\\F3D1";
}

.mdi-inbox-arrow-up-outline::before {
  content: "\\F029C";
}

.mdi-inbox-full::before {
  content: "\\F029D";
}

.mdi-inbox-full-outline::before {
  content: "\\F029E";
}

.mdi-inbox-multiple::before {
  content: "\\F8AF";
}

.mdi-inbox-multiple-outline::before {
  content: "\\FB84";
}

.mdi-inbox-outline::before {
  content: "\\F029F";
}

.mdi-incognito::before {
  content: "\\F5F9";
}

.mdi-infinity::before {
  content: "\\F6E3";
}

.mdi-information::before {
  content: "\\F2FC";
}

.mdi-information-outline::before {
  content: "\\F2FD";
}

.mdi-information-variant::before {
  content: "\\F64E";
}

.mdi-instagram::before {
  content: "\\F2FE";
}

.mdi-instapaper::before {
  content: "\\F2FF";
}

.mdi-instrument-triangle::before {
  content: "\\F0070";
}

.mdi-internet-explorer::before {
  content: "\\F300";
}

.mdi-invert-colors::before {
  content: "\\F301";
}

.mdi-invert-colors-off::before {
  content: "\\FE8B";
}

.mdi-iobroker::before {
  content: "\\F0313";
}

.mdi-ip::before {
  content: "\\FA5E";
}

.mdi-ip-network::before {
  content: "\\FA5F";
}

.mdi-ip-network-outline::before {
  content: "\\FC6C";
}

.mdi-ipod::before {
  content: "\\FC6D";
}

.mdi-islam::before {
  content: "\\F978";
}

.mdi-island::before {
  content: "\\F0071";
}

.mdi-itunes::before {
  content: "\\F676";
}

.mdi-iv-bag::before {
  content: "\\F00E4";
}

.mdi-jabber::before {
  content: "\\FDB1";
}

.mdi-jeepney::before {
  content: "\\F302";
}

.mdi-jellyfish::before {
  content: "\\FF1E";
}

.mdi-jellyfish-outline::before {
  content: "\\FF1F";
}

.mdi-jira::before {
  content: "\\F303";
}

.mdi-jquery::before {
  content: "\\F87C";
}

.mdi-jsfiddle::before {
  content: "\\F304";
}

.mdi-json::before {
  content: "\\F626";
}

.mdi-judaism::before {
  content: "\\F979";
}

.mdi-jump-rope::before {
  content: "\\F032A";
}

.mdi-kabaddi::before {
  content: "\\FD63";
}

.mdi-karate::before {
  content: "\\F82B";
}

.mdi-keg::before {
  content: "\\F305";
}

.mdi-kettle::before {
  content: "\\F5FA";
}

.mdi-kettle-alert::before {
  content: "\\F0342";
}

.mdi-kettle-alert-outline::before {
  content: "\\F0343";
}

.mdi-kettle-off::before {
  content: "\\F0346";
}

.mdi-kettle-off-outline::before {
  content: "\\F0347";
}

.mdi-kettle-outline::before {
  content: "\\FF73";
}

.mdi-kettle-steam::before {
  content: "\\F0344";
}

.mdi-kettle-steam-outline::before {
  content: "\\F0345";
}

.mdi-kettlebell::before {
  content: "\\F032B";
}

.mdi-key::before {
  content: "\\F306";
}

.mdi-key-arrow-right::before {
  content: "\\F033D";
}

.mdi-key-change::before {
  content: "\\F307";
}

.mdi-key-link::before {
  content: "\\F01CA";
}

.mdi-key-minus::before {
  content: "\\F308";
}

.mdi-key-outline::before {
  content: "\\FDB2";
}

.mdi-key-plus::before {
  content: "\\F309";
}

.mdi-key-remove::before {
  content: "\\F30A";
}

.mdi-key-star::before {
  content: "\\F01C9";
}

.mdi-key-variant::before {
  content: "\\F30B";
}

.mdi-key-wireless::before {
  content: "\\FFE2";
}

.mdi-keyboard::before {
  content: "\\F30C";
}

.mdi-keyboard-backspace::before {
  content: "\\F30D";
}

.mdi-keyboard-caps::before {
  content: "\\F30E";
}

.mdi-keyboard-close::before {
  content: "\\F30F";
}

.mdi-keyboard-esc::before {
  content: "\\F02E2";
}

.mdi-keyboard-f1::before {
  content: "\\F02D6";
}

.mdi-keyboard-f10::before {
  content: "\\F02DF";
}

.mdi-keyboard-f11::before {
  content: "\\F02E0";
}

.mdi-keyboard-f12::before {
  content: "\\F02E1";
}

.mdi-keyboard-f2::before {
  content: "\\F02D7";
}

.mdi-keyboard-f3::before {
  content: "\\F02D8";
}

.mdi-keyboard-f4::before {
  content: "\\F02D9";
}

.mdi-keyboard-f5::before {
  content: "\\F02DA";
}

.mdi-keyboard-f6::before {
  content: "\\F02DB";
}

.mdi-keyboard-f7::before {
  content: "\\F02DC";
}

.mdi-keyboard-f8::before {
  content: "\\F02DD";
}

.mdi-keyboard-f9::before {
  content: "\\F02DE";
}

.mdi-keyboard-off::before {
  content: "\\F310";
}

.mdi-keyboard-off-outline::before {
  content: "\\FE8C";
}

.mdi-keyboard-outline::before {
  content: "\\F97A";
}

.mdi-keyboard-return::before {
  content: "\\F311";
}

.mdi-keyboard-settings::before {
  content: "\\F9F8";
}

.mdi-keyboard-settings-outline::before {
  content: "\\F9F9";
}

.mdi-keyboard-space::before {
  content: "\\F0072";
}

.mdi-keyboard-tab::before {
  content: "\\F312";
}

.mdi-keyboard-variant::before {
  content: "\\F313";
}

.mdi-khanda::before {
  content: "\\F0128";
}

.mdi-kickstarter::before {
  content: "\\F744";
}

.mdi-knife::before {
  content: "\\F9FA";
}

.mdi-knife-military::before {
  content: "\\F9FB";
}

.mdi-kodi::before {
  content: "\\F314";
}

.mdi-kotlin::before {
  content: "\\F0244";
}

.mdi-kubernetes::before {
  content: "\\F0129";
}

.mdi-label::before {
  content: "\\F315";
}

.mdi-label-off::before {
  content: "\\FACA";
}

.mdi-label-off-outline::before {
  content: "\\FACB";
}

.mdi-label-outline::before {
  content: "\\F316";
}

.mdi-label-percent::before {
  content: "\\F0315";
}

.mdi-label-percent-outline::before {
  content: "\\F0316";
}

.mdi-label-variant::before {
  content: "\\FACC";
}

.mdi-label-variant-outline::before {
  content: "\\FACD";
}

.mdi-ladybug::before {
  content: "\\F82C";
}

.mdi-lambda::before {
  content: "\\F627";
}

.mdi-lamp::before {
  content: "\\F6B4";
}

.mdi-lan::before {
  content: "\\F317";
}

.mdi-lan-check::before {
  content: "\\F02D5";
}

.mdi-lan-connect::before {
  content: "\\F318";
}

.mdi-lan-disconnect::before {
  content: "\\F319";
}

.mdi-lan-pending::before {
  content: "\\F31A";
}

.mdi-language-c::before {
  content: "\\F671";
}

.mdi-language-cpp::before {
  content: "\\F672";
}

.mdi-language-csharp::before {
  content: "\\F31B";
}

.mdi-language-css3::before {
  content: "\\F31C";
}

.mdi-language-fortran::before {
  content: "\\F0245";
}

.mdi-language-go::before {
  content: "\\F7D2";
}

.mdi-language-haskell::before {
  content: "\\FC6E";
}

.mdi-language-html5::before {
  content: "\\F31D";
}

.mdi-language-java::before {
  content: "\\FB1C";
}

.mdi-language-javascript::before {
  content: "\\F31E";
}

.mdi-language-lua::before {
  content: "\\F8B0";
}

.mdi-language-php::before {
  content: "\\F31F";
}

.mdi-language-python::before {
  content: "\\F320";
}

.mdi-language-python-text::before {
  content: "\\F321";
}

.mdi-language-r::before {
  content: "\\F7D3";
}

.mdi-language-ruby-on-rails::before {
  content: "\\FACE";
}

.mdi-language-swift::before {
  content: "\\F6E4";
}

.mdi-language-typescript::before {
  content: "\\F6E5";
}

.mdi-laptop::before {
  content: "\\F322";
}

.mdi-laptop-chromebook::before {
  content: "\\F323";
}

.mdi-laptop-mac::before {
  content: "\\F324";
}

.mdi-laptop-off::before {
  content: "\\F6E6";
}

.mdi-laptop-windows::before {
  content: "\\F325";
}

.mdi-laravel::before {
  content: "\\FACF";
}

.mdi-lasso::before {
  content: "\\FF20";
}

.mdi-lastfm::before {
  content: "\\F326";
}

.mdi-lastpass::before {
  content: "\\F446";
}

.mdi-latitude::before {
  content: "\\FF74";
}

.mdi-launch::before {
  content: "\\F327";
}

.mdi-lava-lamp::before {
  content: "\\F7D4";
}

.mdi-layers::before {
  content: "\\F328";
}

.mdi-layers-minus::before {
  content: "\\FE8D";
}

.mdi-layers-off::before {
  content: "\\F329";
}

.mdi-layers-off-outline::before {
  content: "\\F9FC";
}

.mdi-layers-outline::before {
  content: "\\F9FD";
}

.mdi-layers-plus::before {
  content: "\\FE30";
}

.mdi-layers-remove::before {
  content: "\\FE31";
}

.mdi-layers-search::before {
  content: "\\F0231";
}

.mdi-layers-search-outline::before {
  content: "\\F0232";
}

.mdi-layers-triple::before {
  content: "\\FF75";
}

.mdi-layers-triple-outline::before {
  content: "\\FF76";
}

.mdi-lead-pencil::before {
  content: "\\F64F";
}

.mdi-leaf::before {
  content: "\\F32A";
}

.mdi-leaf-maple::before {
  content: "\\FC6F";
}

.mdi-leaf-maple-off::before {
  content: "\\F0305";
}

.mdi-leaf-off::before {
  content: "\\F0304";
}

.mdi-leak::before {
  content: "\\FDB3";
}

.mdi-leak-off::before {
  content: "\\FDB4";
}

.mdi-led-off::before {
  content: "\\F32B";
}

.mdi-led-on::before {
  content: "\\F32C";
}

.mdi-led-outline::before {
  content: "\\F32D";
}

.mdi-led-strip::before {
  content: "\\F7D5";
}

.mdi-led-strip-variant::before {
  content: "\\F0073";
}

.mdi-led-variant-off::before {
  content: "\\F32E";
}

.mdi-led-variant-on::before {
  content: "\\F32F";
}

.mdi-led-variant-outline::before {
  content: "\\F330";
}

.mdi-leek::before {
  content: "\\F01A8";
}

.mdi-less-than::before {
  content: "\\F97B";
}

.mdi-less-than-or-equal::before {
  content: "\\F97C";
}

.mdi-library::before {
  content: "\\F331";
}

.mdi-library-books::before {
  content: "\\F332";
}

.mdi-library-movie::before {
  content: "\\FCF4";
}

.mdi-library-music::before {
  content: "\\F333";
}

.mdi-library-music-outline::before {
  content: "\\FF21";
}

.mdi-library-shelves::before {
  content: "\\FB85";
}

.mdi-library-video::before {
  content: "\\FCF5";
}

.mdi-license::before {
  content: "\\FFE3";
}

.mdi-lifebuoy::before {
  content: "\\F87D";
}

.mdi-light-switch::before {
  content: "\\F97D";
}

.mdi-lightbulb::before {
  content: "\\F335";
}

.mdi-lightbulb-cfl::before {
  content: "\\F0233";
}

.mdi-lightbulb-cfl-off::before {
  content: "\\F0234";
}

.mdi-lightbulb-cfl-spiral::before {
  content: "\\F02A0";
}

.mdi-lightbulb-cfl-spiral-off::before {
  content: "\\F02EE";
}

.mdi-lightbulb-group::before {
  content: "\\F027E";
}

.mdi-lightbulb-group-off::before {
  content: "\\F02F8";
}

.mdi-lightbulb-group-off-outline::before {
  content: "\\F02F9";
}

.mdi-lightbulb-group-outline::before {
  content: "\\F027F";
}

.mdi-lightbulb-multiple::before {
  content: "\\F0280";
}

.mdi-lightbulb-multiple-off::before {
  content: "\\F02FA";
}

.mdi-lightbulb-multiple-off-outline::before {
  content: "\\F02FB";
}

.mdi-lightbulb-multiple-outline::before {
  content: "\\F0281";
}

.mdi-lightbulb-off::before {
  content: "\\FE32";
}

.mdi-lightbulb-off-outline::before {
  content: "\\FE33";
}

.mdi-lightbulb-on::before {
  content: "\\F6E7";
}

.mdi-lightbulb-on-outline::before {
  content: "\\F6E8";
}

.mdi-lightbulb-outline::before {
  content: "\\F336";
}

.mdi-lighthouse::before {
  content: "\\F9FE";
}

.mdi-lighthouse-on::before {
  content: "\\F9FF";
}

.mdi-link::before {
  content: "\\F337";
}

.mdi-link-box::before {
  content: "\\FCF6";
}

.mdi-link-box-outline::before {
  content: "\\FCF7";
}

.mdi-link-box-variant::before {
  content: "\\FCF8";
}

.mdi-link-box-variant-outline::before {
  content: "\\FCF9";
}

.mdi-link-lock::before {
  content: "\\F00E5";
}

.mdi-link-off::before {
  content: "\\F338";
}

.mdi-link-plus::before {
  content: "\\FC70";
}

.mdi-link-variant::before {
  content: "\\F339";
}

.mdi-link-variant-minus::before {
  content: "\\F012A";
}

.mdi-link-variant-off::before {
  content: "\\F33A";
}

.mdi-link-variant-plus::before {
  content: "\\F012B";
}

.mdi-link-variant-remove::before {
  content: "\\F012C";
}

.mdi-linkedin::before {
  content: "\\F33B";
}

.mdi-linkedin-box::before {
  content: "\\F33C";
}

.mdi-linux::before {
  content: "\\F33D";
}

.mdi-linux-mint::before {
  content: "\\F8EC";
}

.mdi-litecoin::before {
  content: "\\FA60";
}

.mdi-loading::before {
  content: "\\F771";
}

.mdi-location-enter::before {
  content: "\\FFE4";
}

.mdi-location-exit::before {
  content: "\\FFE5";
}

.mdi-lock::before {
  content: "\\F33E";
}

.mdi-lock-alert::before {
  content: "\\F8ED";
}

.mdi-lock-clock::before {
  content: "\\F97E";
}

.mdi-lock-open::before {
  content: "\\F33F";
}

.mdi-lock-open-outline::before {
  content: "\\F340";
}

.mdi-lock-open-variant::before {
  content: "\\FFE6";
}

.mdi-lock-open-variant-outline::before {
  content: "\\FFE7";
}

.mdi-lock-outline::before {
  content: "\\F341";
}

.mdi-lock-pattern::before {
  content: "\\F6E9";
}

.mdi-lock-plus::before {
  content: "\\F5FB";
}

.mdi-lock-question::before {
  content: "\\F8EE";
}

.mdi-lock-reset::before {
  content: "\\F772";
}

.mdi-lock-smart::before {
  content: "\\F8B1";
}

.mdi-locker::before {
  content: "\\F7D6";
}

.mdi-locker-multiple::before {
  content: "\\F7D7";
}

.mdi-login::before {
  content: "\\F342";
}

.mdi-login-variant::before {
  content: "\\F5FC";
}

.mdi-logout::before {
  content: "\\F343";
}

.mdi-logout-variant::before {
  content: "\\F5FD";
}

.mdi-longitude::before {
  content: "\\FF77";
}

.mdi-looks::before {
  content: "\\F344";
}

.mdi-loupe::before {
  content: "\\F345";
}

.mdi-lumx::before {
  content: "\\F346";
}

.mdi-lungs::before {
  content: "\\F00AF";
}

.mdi-lyft::before {
  content: "\\FB1D";
}

.mdi-magnet::before {
  content: "\\F347";
}

.mdi-magnet-on::before {
  content: "\\F348";
}

.mdi-magnify::before {
  content: "\\F349";
}

.mdi-magnify-close::before {
  content: "\\F97F";
}

.mdi-magnify-minus::before {
  content: "\\F34A";
}

.mdi-magnify-minus-cursor::before {
  content: "\\FA61";
}

.mdi-magnify-minus-outline::before {
  content: "\\F6EB";
}

.mdi-magnify-plus::before {
  content: "\\F34B";
}

.mdi-magnify-plus-cursor::before {
  content: "\\FA62";
}

.mdi-magnify-plus-outline::before {
  content: "\\F6EC";
}

.mdi-magnify-remove-cursor::before {
  content: "\\F0237";
}

.mdi-magnify-remove-outline::before {
  content: "\\F0238";
}

.mdi-magnify-scan::before {
  content: "\\F02A1";
}

.mdi-mail::before {
  content: "\\FED8";
}

.mdi-mail-ru::before {
  content: "\\F34C";
}

.mdi-mailbox::before {
  content: "\\F6ED";
}

.mdi-mailbox-open::before {
  content: "\\FD64";
}

.mdi-mailbox-open-outline::before {
  content: "\\FD65";
}

.mdi-mailbox-open-up::before {
  content: "\\FD66";
}

.mdi-mailbox-open-up-outline::before {
  content: "\\FD67";
}

.mdi-mailbox-outline::before {
  content: "\\FD68";
}

.mdi-mailbox-up::before {
  content: "\\FD69";
}

.mdi-mailbox-up-outline::before {
  content: "\\FD6A";
}

.mdi-map::before {
  content: "\\F34D";
}

.mdi-map-check::before {
  content: "\\FED9";
}

.mdi-map-check-outline::before {
  content: "\\FEDA";
}

.mdi-map-clock::before {
  content: "\\FCFA";
}

.mdi-map-clock-outline::before {
  content: "\\FCFB";
}

.mdi-map-legend::before {
  content: "\\FA00";
}

.mdi-map-marker::before {
  content: "\\F34E";
}

.mdi-map-marker-alert::before {
  content: "\\FF22";
}

.mdi-map-marker-alert-outline::before {
  content: "\\FF23";
}

.mdi-map-marker-check::before {
  content: "\\FC71";
}

.mdi-map-marker-check-outline::before {
  content: "\\F0326";
}

.mdi-map-marker-circle::before {
  content: "\\F34F";
}

.mdi-map-marker-distance::before {
  content: "\\F8EF";
}

.mdi-map-marker-down::before {
  content: "\\F012D";
}

.mdi-map-marker-left::before {
  content: "\\F0306";
}

.mdi-map-marker-left-outline::before {
  content: "\\F0308";
}

.mdi-map-marker-minus::before {
  content: "\\F650";
}

.mdi-map-marker-minus-outline::before {
  content: "\\F0324";
}

.mdi-map-marker-multiple::before {
  content: "\\F350";
}

.mdi-map-marker-multiple-outline::before {
  content: "\\F02A2";
}

.mdi-map-marker-off::before {
  content: "\\F351";
}

.mdi-map-marker-off-outline::before {
  content: "\\F0328";
}

.mdi-map-marker-outline::before {
  content: "\\F7D8";
}

.mdi-map-marker-path::before {
  content: "\\FCFC";
}

.mdi-map-marker-plus::before {
  content: "\\F651";
}

.mdi-map-marker-plus-outline::before {
  content: "\\F0323";
}

.mdi-map-marker-question::before {
  content: "\\FF24";
}

.mdi-map-marker-question-outline::before {
  content: "\\FF25";
}

.mdi-map-marker-radius::before {
  content: "\\F352";
}

.mdi-map-marker-radius-outline::before {
  content: "\\F0327";
}

.mdi-map-marker-remove::before {
  content: "\\FF26";
}

.mdi-map-marker-remove-outline::before {
  content: "\\F0325";
}

.mdi-map-marker-remove-variant::before {
  content: "\\FF27";
}

.mdi-map-marker-right::before {
  content: "\\F0307";
}

.mdi-map-marker-right-outline::before {
  content: "\\F0309";
}

.mdi-map-marker-up::before {
  content: "\\F012E";
}

.mdi-map-minus::before {
  content: "\\F980";
}

.mdi-map-outline::before {
  content: "\\F981";
}

.mdi-map-plus::before {
  content: "\\F982";
}

.mdi-map-search::before {
  content: "\\F983";
}

.mdi-map-search-outline::before {
  content: "\\F984";
}

.mdi-mapbox::before {
  content: "\\FB86";
}

.mdi-margin::before {
  content: "\\F353";
}

.mdi-markdown::before {
  content: "\\F354";
}

.mdi-markdown-outline::before {
  content: "\\FF78";
}

.mdi-marker::before {
  content: "\\F652";
}

.mdi-marker-cancel::before {
  content: "\\FDB5";
}

.mdi-marker-check::before {
  content: "\\F355";
}

.mdi-mastodon::before {
  content: "\\FAD0";
}

.mdi-mastodon-variant::before {
  content: "\\FAD1";
}

.mdi-material-design::before {
  content: "\\F985";
}

.mdi-material-ui::before {
  content: "\\F357";
}

.mdi-math-compass::before {
  content: "\\F358";
}

.mdi-math-cos::before {
  content: "\\FC72";
}

.mdi-math-integral::before {
  content: "\\FFE8";
}

.mdi-math-integral-box::before {
  content: "\\FFE9";
}

.mdi-math-log::before {
  content: "\\F00B0";
}

.mdi-math-norm::before {
  content: "\\FFEA";
}

.mdi-math-norm-box::before {
  content: "\\FFEB";
}

.mdi-math-sin::before {
  content: "\\FC73";
}

.mdi-math-tan::before {
  content: "\\FC74";
}

.mdi-matrix::before {
  content: "\\F628";
}

.mdi-medal::before {
  content: "\\F986";
}

.mdi-medical-bag::before {
  content: "\\F6EE";
}

.mdi-meditation::before {
  content: "\\F01A6";
}

.mdi-medium::before {
  content: "\\F35A";
}

.mdi-meetup::before {
  content: "\\FAD2";
}

.mdi-memory::before {
  content: "\\F35B";
}

.mdi-menu::before {
  content: "\\F35C";
}

.mdi-menu-down::before {
  content: "\\F35D";
}

.mdi-menu-down-outline::before {
  content: "\\F6B5";
}

.mdi-menu-left::before {
  content: "\\F35E";
}

.mdi-menu-left-outline::before {
  content: "\\FA01";
}

.mdi-menu-open::before {
  content: "\\FB87";
}

.mdi-menu-right::before {
  content: "\\F35F";
}

.mdi-menu-right-outline::before {
  content: "\\FA02";
}

.mdi-menu-swap::before {
  content: "\\FA63";
}

.mdi-menu-swap-outline::before {
  content: "\\FA64";
}

.mdi-menu-up::before {
  content: "\\F360";
}

.mdi-menu-up-outline::before {
  content: "\\F6B6";
}

.mdi-merge::before {
  content: "\\FF79";
}

.mdi-message::before {
  content: "\\F361";
}

.mdi-message-alert::before {
  content: "\\F362";
}

.mdi-message-alert-outline::before {
  content: "\\FA03";
}

.mdi-message-arrow-left::before {
  content: "\\F031D";
}

.mdi-message-arrow-left-outline::before {
  content: "\\F031E";
}

.mdi-message-arrow-right::before {
  content: "\\F031F";
}

.mdi-message-arrow-right-outline::before {
  content: "\\F0320";
}

.mdi-message-bulleted::before {
  content: "\\F6A1";
}

.mdi-message-bulleted-off::before {
  content: "\\F6A2";
}

.mdi-message-draw::before {
  content: "\\F363";
}

.mdi-message-image::before {
  content: "\\F364";
}

.mdi-message-image-outline::before {
  content: "\\F0197";
}

.mdi-message-lock::before {
  content: "\\FFEC";
}

.mdi-message-lock-outline::before {
  content: "\\F0198";
}

.mdi-message-minus::before {
  content: "\\F0199";
}

.mdi-message-minus-outline::before {
  content: "\\F019A";
}

.mdi-message-outline::before {
  content: "\\F365";
}

.mdi-message-plus::before {
  content: "\\F653";
}

.mdi-message-plus-outline::before {
  content: "\\F00E6";
}

.mdi-message-processing::before {
  content: "\\F366";
}

.mdi-message-processing-outline::before {
  content: "\\F019B";
}

.mdi-message-reply::before {
  content: "\\F367";
}

.mdi-message-reply-text::before {
  content: "\\F368";
}

.mdi-message-settings::before {
  content: "\\F6EF";
}

.mdi-message-settings-outline::before {
  content: "\\F019C";
}

.mdi-message-settings-variant::before {
  content: "\\F6F0";
}

.mdi-message-settings-variant-outline::before {
  content: "\\F019D";
}

.mdi-message-text::before {
  content: "\\F369";
}

.mdi-message-text-clock::before {
  content: "\\F019E";
}

.mdi-message-text-clock-outline::before {
  content: "\\F019F";
}

.mdi-message-text-lock::before {
  content: "\\FFED";
}

.mdi-message-text-lock-outline::before {
  content: "\\F01A0";
}

.mdi-message-text-outline::before {
  content: "\\F36A";
}

.mdi-message-video::before {
  content: "\\F36B";
}

.mdi-meteor::before {
  content: "\\F629";
}

.mdi-metronome::before {
  content: "\\F7D9";
}

.mdi-metronome-tick::before {
  content: "\\F7DA";
}

.mdi-micro-sd::before {
  content: "\\F7DB";
}

.mdi-microphone::before {
  content: "\\F36C";
}

.mdi-microphone-minus::before {
  content: "\\F8B2";
}

.mdi-microphone-off::before {
  content: "\\F36D";
}

.mdi-microphone-outline::before {
  content: "\\F36E";
}

.mdi-microphone-plus::before {
  content: "\\F8B3";
}

.mdi-microphone-settings::before {
  content: "\\F36F";
}

.mdi-microphone-variant::before {
  content: "\\F370";
}

.mdi-microphone-variant-off::before {
  content: "\\F371";
}

.mdi-microscope::before {
  content: "\\F654";
}

.mdi-microsoft::before {
  content: "\\F372";
}

.mdi-microsoft-dynamics::before {
  content: "\\F987";
}

.mdi-microwave::before {
  content: "\\FC75";
}

.mdi-middleware::before {
  content: "\\FF7A";
}

.mdi-middleware-outline::before {
  content: "\\FF7B";
}

.mdi-midi::before {
  content: "\\F8F0";
}

.mdi-midi-port::before {
  content: "\\F8F1";
}

.mdi-mine::before {
  content: "\\FDB6";
}

.mdi-minecraft::before {
  content: "\\F373";
}

.mdi-mini-sd::before {
  content: "\\FA04";
}

.mdi-minidisc::before {
  content: "\\FA05";
}

.mdi-minus::before {
  content: "\\F374";
}

.mdi-minus-box::before {
  content: "\\F375";
}

.mdi-minus-box-multiple::before {
  content: "\\F016C";
}

.mdi-minus-box-multiple-outline::before {
  content: "\\F016D";
}

.mdi-minus-box-outline::before {
  content: "\\F6F1";
}

.mdi-minus-circle::before {
  content: "\\F376";
}

.mdi-minus-circle-outline::before {
  content: "\\F377";
}

.mdi-minus-network::before {
  content: "\\F378";
}

.mdi-minus-network-outline::before {
  content: "\\FC76";
}

.mdi-mirror::before {
  content: "\\F0228";
}

.mdi-mixcloud::before {
  content: "\\F62A";
}

.mdi-mixed-martial-arts::before {
  content: "\\FD6B";
}

.mdi-mixed-reality::before {
  content: "\\F87E";
}

.mdi-mixer::before {
  content: "\\F7DC";
}

.mdi-molecule::before {
  content: "\\FB88";
}

.mdi-monitor::before {
  content: "\\F379";
}

.mdi-monitor-cellphone::before {
  content: "\\F988";
}

.mdi-monitor-cellphone-star::before {
  content: "\\F989";
}

.mdi-monitor-clean::before {
  content: "\\F012F";
}

.mdi-monitor-dashboard::before {
  content: "\\FA06";
}

.mdi-monitor-edit::before {
  content: "\\F02F1";
}

.mdi-monitor-lock::before {
  content: "\\FDB7";
}

.mdi-monitor-multiple::before {
  content: "\\F37A";
}

.mdi-monitor-off::before {
  content: "\\FD6C";
}

.mdi-monitor-screenshot::before {
  content: "\\FE34";
}

.mdi-monitor-speaker::before {
  content: "\\FF7C";
}

.mdi-monitor-speaker-off::before {
  content: "\\FF7D";
}

.mdi-monitor-star::before {
  content: "\\FDB8";
}

.mdi-moon-first-quarter::before {
  content: "\\FF7E";
}

.mdi-moon-full::before {
  content: "\\FF7F";
}

.mdi-moon-last-quarter::before {
  content: "\\FF80";
}

.mdi-moon-new::before {
  content: "\\FF81";
}

.mdi-moon-waning-crescent::before {
  content: "\\FF82";
}

.mdi-moon-waning-gibbous::before {
  content: "\\FF83";
}

.mdi-moon-waxing-crescent::before {
  content: "\\FF84";
}

.mdi-moon-waxing-gibbous::before {
  content: "\\FF85";
}

.mdi-moped::before {
  content: "\\F00B1";
}

.mdi-more::before {
  content: "\\F37B";
}

.mdi-mother-heart::before {
  content: "\\F033F";
}

.mdi-mother-nurse::before {
  content: "\\FCFD";
}

.mdi-motion-sensor::before {
  content: "\\FD6D";
}

.mdi-motorbike::before {
  content: "\\F37C";
}

.mdi-mouse::before {
  content: "\\F37D";
}

.mdi-mouse-bluetooth::before {
  content: "\\F98A";
}

.mdi-mouse-off::before {
  content: "\\F37E";
}

.mdi-mouse-variant::before {
  content: "\\F37F";
}

.mdi-mouse-variant-off::before {
  content: "\\F380";
}

.mdi-move-resize::before {
  content: "\\F655";
}

.mdi-move-resize-variant::before {
  content: "\\F656";
}

.mdi-movie::before {
  content: "\\F381";
}

.mdi-movie-edit::before {
  content: "\\F014D";
}

.mdi-movie-edit-outline::before {
  content: "\\F014E";
}

.mdi-movie-filter::before {
  content: "\\F014F";
}

.mdi-movie-filter-outline::before {
  content: "\\F0150";
}

.mdi-movie-open::before {
  content: "\\FFEE";
}

.mdi-movie-open-outline::before {
  content: "\\FFEF";
}

.mdi-movie-outline::before {
  content: "\\FDB9";
}

.mdi-movie-roll::before {
  content: "\\F7DD";
}

.mdi-movie-search::before {
  content: "\\F01FD";
}

.mdi-movie-search-outline::before {
  content: "\\F01FE";
}

.mdi-muffin::before {
  content: "\\F98B";
}

.mdi-multiplication::before {
  content: "\\F382";
}

.mdi-multiplication-box::before {
  content: "\\F383";
}

.mdi-mushroom::before {
  content: "\\F7DE";
}

.mdi-mushroom-outline::before {
  content: "\\F7DF";
}

.mdi-music::before {
  content: "\\F759";
}

.mdi-music-accidental-double-flat::before {
  content: "\\FF86";
}

.mdi-music-accidental-double-sharp::before {
  content: "\\FF87";
}

.mdi-music-accidental-flat::before {
  content: "\\FF88";
}

.mdi-music-accidental-natural::before {
  content: "\\FF89";
}

.mdi-music-accidental-sharp::before {
  content: "\\FF8A";
}

.mdi-music-box::before {
  content: "\\F384";
}

.mdi-music-box-outline::before {
  content: "\\F385";
}

.mdi-music-circle::before {
  content: "\\F386";
}

.mdi-music-circle-outline::before {
  content: "\\FAD3";
}

.mdi-music-clef-alto::before {
  content: "\\FF8B";
}

.mdi-music-clef-bass::before {
  content: "\\FF8C";
}

.mdi-music-clef-treble::before {
  content: "\\FF8D";
}

.mdi-music-note::before {
  content: "\\F387";
}

.mdi-music-note-bluetooth::before {
  content: "\\F5FE";
}

.mdi-music-note-bluetooth-off::before {
  content: "\\F5FF";
}

.mdi-music-note-eighth::before {
  content: "\\F388";
}

.mdi-music-note-eighth-dotted::before {
  content: "\\FF8E";
}

.mdi-music-note-half::before {
  content: "\\F389";
}

.mdi-music-note-half-dotted::before {
  content: "\\FF8F";
}

.mdi-music-note-off::before {
  content: "\\F38A";
}

.mdi-music-note-off-outline::before {
  content: "\\FF90";
}

.mdi-music-note-outline::before {
  content: "\\FF91";
}

.mdi-music-note-plus::before {
  content: "\\FDBA";
}

.mdi-music-note-quarter::before {
  content: "\\F38B";
}

.mdi-music-note-quarter-dotted::before {
  content: "\\FF92";
}

.mdi-music-note-sixteenth::before {
  content: "\\F38C";
}

.mdi-music-note-sixteenth-dotted::before {
  content: "\\FF93";
}

.mdi-music-note-whole::before {
  content: "\\F38D";
}

.mdi-music-note-whole-dotted::before {
  content: "\\FF94";
}

.mdi-music-off::before {
  content: "\\F75A";
}

.mdi-music-rest-eighth::before {
  content: "\\FF95";
}

.mdi-music-rest-half::before {
  content: "\\FF96";
}

.mdi-music-rest-quarter::before {
  content: "\\FF97";
}

.mdi-music-rest-sixteenth::before {
  content: "\\FF98";
}

.mdi-music-rest-whole::before {
  content: "\\FF99";
}

.mdi-nail::before {
  content: "\\FDBB";
}

.mdi-nas::before {
  content: "\\F8F2";
}

.mdi-nativescript::before {
  content: "\\F87F";
}

.mdi-nature::before {
  content: "\\F38E";
}

.mdi-nature-people::before {
  content: "\\F38F";
}

.mdi-navigation::before {
  content: "\\F390";
}

.mdi-near-me::before {
  content: "\\F5CD";
}

.mdi-necklace::before {
  content: "\\FF28";
}

.mdi-needle::before {
  content: "\\F391";
}

.mdi-netflix::before {
  content: "\\F745";
}

.mdi-network::before {
  content: "\\F6F2";
}

.mdi-network-off::before {
  content: "\\FC77";
}

.mdi-network-off-outline::before {
  content: "\\FC78";
}

.mdi-network-outline::before {
  content: "\\FC79";
}

.mdi-network-router::before {
  content: "\\F00B2";
}

.mdi-network-strength-1::before {
  content: "\\F8F3";
}

.mdi-network-strength-1-alert::before {
  content: "\\F8F4";
}

.mdi-network-strength-2::before {
  content: "\\F8F5";
}

.mdi-network-strength-2-alert::before {
  content: "\\F8F6";
}

.mdi-network-strength-3::before {
  content: "\\F8F7";
}

.mdi-network-strength-3-alert::before {
  content: "\\F8F8";
}

.mdi-network-strength-4::before {
  content: "\\F8F9";
}

.mdi-network-strength-4-alert::before {
  content: "\\F8FA";
}

.mdi-network-strength-off::before {
  content: "\\F8FB";
}

.mdi-network-strength-off-outline::before {
  content: "\\F8FC";
}

.mdi-network-strength-outline::before {
  content: "\\F8FD";
}

.mdi-new-box::before {
  content: "\\F394";
}

.mdi-newspaper::before {
  content: "\\F395";
}

.mdi-newspaper-minus::before {
  content: "\\FF29";
}

.mdi-newspaper-plus::before {
  content: "\\FF2A";
}

.mdi-newspaper-variant::before {
  content: "\\F0023";
}

.mdi-newspaper-variant-multiple::before {
  content: "\\F0024";
}

.mdi-newspaper-variant-multiple-outline::before {
  content: "\\F0025";
}

.mdi-newspaper-variant-outline::before {
  content: "\\F0026";
}

.mdi-nfc::before {
  content: "\\F396";
}

.mdi-nfc-off::before {
  content: "\\FE35";
}

.mdi-nfc-search-variant::before {
  content: "\\FE36";
}

.mdi-nfc-tap::before {
  content: "\\F397";
}

.mdi-nfc-variant::before {
  content: "\\F398";
}

.mdi-nfc-variant-off::before {
  content: "\\FE37";
}

.mdi-ninja::before {
  content: "\\F773";
}

.mdi-nintendo-switch::before {
  content: "\\F7E0";
}

.mdi-nix::before {
  content: "\\F0130";
}

.mdi-nodejs::before {
  content: "\\F399";
}

.mdi-noodles::before {
  content: "\\F01A9";
}

.mdi-not-equal::before {
  content: "\\F98C";
}

.mdi-not-equal-variant::before {
  content: "\\F98D";
}

.mdi-note::before {
  content: "\\F39A";
}

.mdi-note-multiple::before {
  content: "\\F6B7";
}

.mdi-note-multiple-outline::before {
  content: "\\F6B8";
}

.mdi-note-outline::before {
  content: "\\F39B";
}

.mdi-note-plus::before {
  content: "\\F39C";
}

.mdi-note-plus-outline::before {
  content: "\\F39D";
}

.mdi-note-text::before {
  content: "\\F39E";
}

.mdi-note-text-outline::before {
  content: "\\F0202";
}

.mdi-notebook::before {
  content: "\\F82D";
}

.mdi-notebook-multiple::before {
  content: "\\FE38";
}

.mdi-notebook-outline::before {
  content: "\\FEDC";
}

.mdi-notification-clear-all::before {
  content: "\\F39F";
}

.mdi-npm::before {
  content: "\\F6F6";
}

.mdi-npm-variant::before {
  content: "\\F98E";
}

.mdi-npm-variant-outline::before {
  content: "\\F98F";
}

.mdi-nuke::before {
  content: "\\F6A3";
}

.mdi-null::before {
  content: "\\F7E1";
}

.mdi-numeric::before {
  content: "\\F3A0";
}

.mdi-numeric-0::before {
  content: "\\30";
}

.mdi-numeric-0-box::before {
  content: "\\F3A1";
}

.mdi-numeric-0-box-multiple::before {
  content: "\\FF2B";
}

.mdi-numeric-0-box-multiple-outline::before {
  content: "\\F3A2";
}

.mdi-numeric-0-box-outline::before {
  content: "\\F3A3";
}

.mdi-numeric-0-circle::before {
  content: "\\FC7A";
}

.mdi-numeric-0-circle-outline::before {
  content: "\\FC7B";
}

.mdi-numeric-1::before {
  content: "\\31";
}

.mdi-numeric-1-box::before {
  content: "\\F3A4";
}

.mdi-numeric-1-box-multiple::before {
  content: "\\FF2C";
}

.mdi-numeric-1-box-multiple-outline::before {
  content: "\\F3A5";
}

.mdi-numeric-1-box-outline::before {
  content: "\\F3A6";
}

.mdi-numeric-1-circle::before {
  content: "\\FC7C";
}

.mdi-numeric-1-circle-outline::before {
  content: "\\FC7D";
}

.mdi-numeric-10::before {
  content: "\\F000A";
}

.mdi-numeric-10-box::before {
  content: "\\FF9A";
}

.mdi-numeric-10-box-multiple::before {
  content: "\\F000B";
}

.mdi-numeric-10-box-multiple-outline::before {
  content: "\\F000C";
}

.mdi-numeric-10-box-outline::before {
  content: "\\FF9B";
}

.mdi-numeric-10-circle::before {
  content: "\\F000D";
}

.mdi-numeric-10-circle-outline::before {
  content: "\\F000E";
}

.mdi-numeric-2::before {
  content: "\\32";
}

.mdi-numeric-2-box::before {
  content: "\\F3A7";
}

.mdi-numeric-2-box-multiple::before {
  content: "\\FF2D";
}

.mdi-numeric-2-box-multiple-outline::before {
  content: "\\F3A8";
}

.mdi-numeric-2-box-outline::before {
  content: "\\F3A9";
}

.mdi-numeric-2-circle::before {
  content: "\\FC7E";
}

.mdi-numeric-2-circle-outline::before {
  content: "\\FC7F";
}

.mdi-numeric-3::before {
  content: "\\33";
}

.mdi-numeric-3-box::before {
  content: "\\F3AA";
}

.mdi-numeric-3-box-multiple::before {
  content: "\\FF2E";
}

.mdi-numeric-3-box-multiple-outline::before {
  content: "\\F3AB";
}

.mdi-numeric-3-box-outline::before {
  content: "\\F3AC";
}

.mdi-numeric-3-circle::before {
  content: "\\FC80";
}

.mdi-numeric-3-circle-outline::before {
  content: "\\FC81";
}

.mdi-numeric-4::before {
  content: "\\34";
}

.mdi-numeric-4-box::before {
  content: "\\F3AD";
}

.mdi-numeric-4-box-multiple::before {
  content: "\\FF2F";
}

.mdi-numeric-4-box-multiple-outline::before {
  content: "\\F3AE";
}

.mdi-numeric-4-box-outline::before {
  content: "\\F3AF";
}

.mdi-numeric-4-circle::before {
  content: "\\FC82";
}

.mdi-numeric-4-circle-outline::before {
  content: "\\FC83";
}

.mdi-numeric-5::before {
  content: "\\35";
}

.mdi-numeric-5-box::before {
  content: "\\F3B0";
}

.mdi-numeric-5-box-multiple::before {
  content: "\\FF30";
}

.mdi-numeric-5-box-multiple-outline::before {
  content: "\\F3B1";
}

.mdi-numeric-5-box-outline::before {
  content: "\\F3B2";
}

.mdi-numeric-5-circle::before {
  content: "\\FC84";
}

.mdi-numeric-5-circle-outline::before {
  content: "\\FC85";
}

.mdi-numeric-6::before {
  content: "\\36";
}

.mdi-numeric-6-box::before {
  content: "\\F3B3";
}

.mdi-numeric-6-box-multiple::before {
  content: "\\FF31";
}

.mdi-numeric-6-box-multiple-outline::before {
  content: "\\F3B4";
}

.mdi-numeric-6-box-outline::before {
  content: "\\F3B5";
}

.mdi-numeric-6-circle::before {
  content: "\\FC86";
}

.mdi-numeric-6-circle-outline::before {
  content: "\\FC87";
}

.mdi-numeric-7::before {
  content: "\\37";
}

.mdi-numeric-7-box::before {
  content: "\\F3B6";
}

.mdi-numeric-7-box-multiple::before {
  content: "\\FF32";
}

.mdi-numeric-7-box-multiple-outline::before {
  content: "\\F3B7";
}

.mdi-numeric-7-box-outline::before {
  content: "\\F3B8";
}

.mdi-numeric-7-circle::before {
  content: "\\FC88";
}

.mdi-numeric-7-circle-outline::before {
  content: "\\FC89";
}

.mdi-numeric-8::before {
  content: "\\38";
}

.mdi-numeric-8-box::before {
  content: "\\F3B9";
}

.mdi-numeric-8-box-multiple::before {
  content: "\\FF33";
}

.mdi-numeric-8-box-multiple-outline::before {
  content: "\\F3BA";
}

.mdi-numeric-8-box-outline::before {
  content: "\\F3BB";
}

.mdi-numeric-8-circle::before {
  content: "\\FC8A";
}

.mdi-numeric-8-circle-outline::before {
  content: "\\FC8B";
}

.mdi-numeric-9::before {
  content: "\\39";
}

.mdi-numeric-9-box::before {
  content: "\\F3BC";
}

.mdi-numeric-9-box-multiple::before {
  content: "\\FF34";
}

.mdi-numeric-9-box-multiple-outline::before {
  content: "\\F3BD";
}

.mdi-numeric-9-box-outline::before {
  content: "\\F3BE";
}

.mdi-numeric-9-circle::before {
  content: "\\FC8C";
}

.mdi-numeric-9-circle-outline::before {
  content: "\\FC8D";
}

.mdi-numeric-9-plus::before {
  content: "\\F000F";
}

.mdi-numeric-9-plus-box::before {
  content: "\\F3BF";
}

.mdi-numeric-9-plus-box-multiple::before {
  content: "\\FF35";
}

.mdi-numeric-9-plus-box-multiple-outline::before {
  content: "\\F3C0";
}

.mdi-numeric-9-plus-box-outline::before {
  content: "\\F3C1";
}

.mdi-numeric-9-plus-circle::before {
  content: "\\FC8E";
}

.mdi-numeric-9-plus-circle-outline::before {
  content: "\\FC8F";
}

.mdi-numeric-negative-1::before {
  content: "\\F0074";
}

.mdi-nut::before {
  content: "\\F6F7";
}

.mdi-nutrition::before {
  content: "\\F3C2";
}

.mdi-nuxt::before {
  content: "\\F0131";
}

.mdi-oar::before {
  content: "\\F67B";
}

.mdi-ocarina::before {
  content: "\\FDBC";
}

.mdi-oci::before {
  content: "\\F0314";
}

.mdi-ocr::before {
  content: "\\F0165";
}

.mdi-octagon::before {
  content: "\\F3C3";
}

.mdi-octagon-outline::before {
  content: "\\F3C4";
}

.mdi-octagram::before {
  content: "\\F6F8";
}

.mdi-octagram-outline::before {
  content: "\\F774";
}

.mdi-odnoklassniki::before {
  content: "\\F3C5";
}

.mdi-offer::before {
  content: "\\F0246";
}

.mdi-office::before {
  content: "\\F3C6";
}

.mdi-office-building::before {
  content: "\\F990";
}

.mdi-oil::before {
  content: "\\F3C7";
}

.mdi-oil-lamp::before {
  content: "\\FF36";
}

.mdi-oil-level::before {
  content: "\\F0075";
}

.mdi-oil-temperature::before {
  content: "\\F0019";
}

.mdi-omega::before {
  content: "\\F3C9";
}

.mdi-one-up::before {
  content: "\\FB89";
}

.mdi-onedrive::before {
  content: "\\F3CA";
}

.mdi-onenote::before {
  content: "\\F746";
}

.mdi-onepassword::before {
  content: "\\F880";
}

.mdi-opacity::before {
  content: "\\F5CC";
}

.mdi-open-in-app::before {
  content: "\\F3CB";
}

.mdi-open-in-new::before {
  content: "\\F3CC";
}

.mdi-open-source-initiative::before {
  content: "\\FB8A";
}

.mdi-openid::before {
  content: "\\F3CD";
}

.mdi-opera::before {
  content: "\\F3CE";
}

.mdi-orbit::before {
  content: "\\F018";
}

.mdi-origin::before {
  content: "\\FB2B";
}

.mdi-ornament::before {
  content: "\\F3CF";
}

.mdi-ornament-variant::before {
  content: "\\F3D0";
}

.mdi-outdoor-lamp::before {
  content: "\\F0076";
}

.mdi-outlook::before {
  content: "\\FCFE";
}

.mdi-overscan::before {
  content: "\\F0027";
}

.mdi-owl::before {
  content: "\\F3D2";
}

.mdi-pac-man::before {
  content: "\\FB8B";
}

.mdi-package::before {
  content: "\\F3D3";
}

.mdi-package-down::before {
  content: "\\F3D4";
}

.mdi-package-up::before {
  content: "\\F3D5";
}

.mdi-package-variant::before {
  content: "\\F3D6";
}

.mdi-package-variant-closed::before {
  content: "\\F3D7";
}

.mdi-page-first::before {
  content: "\\F600";
}

.mdi-page-last::before {
  content: "\\F601";
}

.mdi-page-layout-body::before {
  content: "\\F6F9";
}

.mdi-page-layout-footer::before {
  content: "\\F6FA";
}

.mdi-page-layout-header::before {
  content: "\\F6FB";
}

.mdi-page-layout-header-footer::before {
  content: "\\FF9C";
}

.mdi-page-layout-sidebar-left::before {
  content: "\\F6FC";
}

.mdi-page-layout-sidebar-right::before {
  content: "\\F6FD";
}

.mdi-page-next::before {
  content: "\\FB8C";
}

.mdi-page-next-outline::before {
  content: "\\FB8D";
}

.mdi-page-previous::before {
  content: "\\FB8E";
}

.mdi-page-previous-outline::before {
  content: "\\FB8F";
}

.mdi-palette::before {
  content: "\\F3D8";
}

.mdi-palette-advanced::before {
  content: "\\F3D9";
}

.mdi-palette-outline::before {
  content: "\\FE6C";
}

.mdi-palette-swatch::before {
  content: "\\F8B4";
}

.mdi-palm-tree::before {
  content: "\\F0077";
}

.mdi-pan::before {
  content: "\\FB90";
}

.mdi-pan-bottom-left::before {
  content: "\\FB91";
}

.mdi-pan-bottom-right::before {
  content: "\\FB92";
}

.mdi-pan-down::before {
  content: "\\FB93";
}

.mdi-pan-horizontal::before {
  content: "\\FB94";
}

.mdi-pan-left::before {
  content: "\\FB95";
}

.mdi-pan-right::before {
  content: "\\FB96";
}

.mdi-pan-top-left::before {
  content: "\\FB97";
}

.mdi-pan-top-right::before {
  content: "\\FB98";
}

.mdi-pan-up::before {
  content: "\\FB99";
}

.mdi-pan-vertical::before {
  content: "\\FB9A";
}

.mdi-panda::before {
  content: "\\F3DA";
}

.mdi-pandora::before {
  content: "\\F3DB";
}

.mdi-panorama::before {
  content: "\\F3DC";
}

.mdi-panorama-fisheye::before {
  content: "\\F3DD";
}

.mdi-panorama-horizontal::before {
  content: "\\F3DE";
}

.mdi-panorama-vertical::before {
  content: "\\F3DF";
}

.mdi-panorama-wide-angle::before {
  content: "\\F3E0";
}

.mdi-paper-cut-vertical::before {
  content: "\\F3E1";
}

.mdi-paper-roll::before {
  content: "\\F0182";
}

.mdi-paper-roll-outline::before {
  content: "\\F0183";
}

.mdi-paperclip::before {
  content: "\\F3E2";
}

.mdi-parachute::before {
  content: "\\FC90";
}

.mdi-parachute-outline::before {
  content: "\\FC91";
}

.mdi-parking::before {
  content: "\\F3E3";
}

.mdi-party-popper::before {
  content: "\\F0078";
}

.mdi-passport::before {
  content: "\\F7E2";
}

.mdi-passport-biometric::before {
  content: "\\FDBD";
}

.mdi-pasta::before {
  content: "\\F018B";
}

.mdi-patio-heater::before {
  content: "\\FF9D";
}

.mdi-patreon::before {
  content: "\\F881";
}

.mdi-pause::before {
  content: "\\F3E4";
}

.mdi-pause-circle::before {
  content: "\\F3E5";
}

.mdi-pause-circle-outline::before {
  content: "\\F3E6";
}

.mdi-pause-octagon::before {
  content: "\\F3E7";
}

.mdi-pause-octagon-outline::before {
  content: "\\F3E8";
}

.mdi-paw::before {
  content: "\\F3E9";
}

.mdi-paw-off::before {
  content: "\\F657";
}

.mdi-paypal::before {
  content: "\\F882";
}

.mdi-pdf-box::before {
  content: "\\FE39";
}

.mdi-peace::before {
  content: "\\F883";
}

.mdi-peanut::before {
  content: "\\F001E";
}

.mdi-peanut-off::before {
  content: "\\F001F";
}

.mdi-peanut-off-outline::before {
  content: "\\F0021";
}

.mdi-peanut-outline::before {
  content: "\\F0020";
}

.mdi-pen::before {
  content: "\\F3EA";
}

.mdi-pen-lock::before {
  content: "\\FDBE";
}

.mdi-pen-minus::before {
  content: "\\FDBF";
}

.mdi-pen-off::before {
  content: "\\FDC0";
}

.mdi-pen-plus::before {
  content: "\\FDC1";
}

.mdi-pen-remove::before {
  content: "\\FDC2";
}

.mdi-pencil::before {
  content: "\\F3EB";
}

.mdi-pencil-box::before {
  content: "\\F3EC";
}

.mdi-pencil-box-multiple::before {
  content: "\\F016F";
}

.mdi-pencil-box-multiple-outline::before {
  content: "\\F0170";
}

.mdi-pencil-box-outline::before {
  content: "\\F3ED";
}

.mdi-pencil-circle::before {
  content: "\\F6FE";
}

.mdi-pencil-circle-outline::before {
  content: "\\F775";
}

.mdi-pencil-lock::before {
  content: "\\F3EE";
}

.mdi-pencil-lock-outline::before {
  content: "\\FDC3";
}

.mdi-pencil-minus::before {
  content: "\\FDC4";
}

.mdi-pencil-minus-outline::before {
  content: "\\FDC5";
}

.mdi-pencil-off::before {
  content: "\\F3EF";
}

.mdi-pencil-off-outline::before {
  content: "\\FDC6";
}

.mdi-pencil-outline::before {
  content: "\\FC92";
}

.mdi-pencil-plus::before {
  content: "\\FDC7";
}

.mdi-pencil-plus-outline::before {
  content: "\\FDC8";
}

.mdi-pencil-remove::before {
  content: "\\FDC9";
}

.mdi-pencil-remove-outline::before {
  content: "\\FDCA";
}

.mdi-penguin::before {
  content: "\\FEDD";
}

.mdi-pentagon::before {
  content: "\\F6FF";
}

.mdi-pentagon-outline::before {
  content: "\\F700";
}

.mdi-percent::before {
  content: "\\F3F0";
}

.mdi-percent-outline::before {
  content: "\\F02A3";
}

.mdi-periodic-table::before {
  content: "\\F8B5";
}

.mdi-periodic-table-co::before {
  content: "\\F0329";
}

.mdi-periodic-table-co2::before {
  content: "\\F7E3";
}

.mdi-periscope::before {
  content: "\\F747";
}

.mdi-perspective-less::before {
  content: "\\FCFF";
}

.mdi-perspective-more::before {
  content: "\\FD00";
}

.mdi-pharmacy::before {
  content: "\\F3F1";
}

.mdi-phone::before {
  content: "\\F3F2";
}

.mdi-phone-alert::before {
  content: "\\FF37";
}

.mdi-phone-alert-outline::before {
  content: "\\F01B9";
}

.mdi-phone-bluetooth::before {
  content: "\\F3F3";
}

.mdi-phone-bluetooth-outline::before {
  content: "\\F01BA";
}

.mdi-phone-cancel::before {
  content: "\\F00E7";
}

.mdi-phone-cancel-outline::before {
  content: "\\F01BB";
}

.mdi-phone-check::before {
  content: "\\F01D4";
}

.mdi-phone-check-outline::before {
  content: "\\F01D5";
}

.mdi-phone-classic::before {
  content: "\\F602";
}

.mdi-phone-classic-off::before {
  content: "\\F02A4";
}

.mdi-phone-forward::before {
  content: "\\F3F4";
}

.mdi-phone-forward-outline::before {
  content: "\\F01BC";
}

.mdi-phone-hangup::before {
  content: "\\F3F5";
}

.mdi-phone-hangup-outline::before {
  content: "\\F01BD";
}

.mdi-phone-in-talk::before {
  content: "\\F3F6";
}

.mdi-phone-in-talk-outline::before {
  content: "\\F01AD";
}

.mdi-phone-incoming::before {
  content: "\\F3F7";
}

.mdi-phone-incoming-outline::before {
  content: "\\F01BE";
}

.mdi-phone-lock::before {
  content: "\\F3F8";
}

.mdi-phone-lock-outline::before {
  content: "\\F01BF";
}

.mdi-phone-log::before {
  content: "\\F3F9";
}

.mdi-phone-log-outline::before {
  content: "\\F01C0";
}

.mdi-phone-message::before {
  content: "\\F01C1";
}

.mdi-phone-message-outline::before {
  content: "\\F01C2";
}

.mdi-phone-minus::before {
  content: "\\F658";
}

.mdi-phone-minus-outline::before {
  content: "\\F01C3";
}

.mdi-phone-missed::before {
  content: "\\F3FA";
}

.mdi-phone-missed-outline::before {
  content: "\\F01D0";
}

.mdi-phone-off::before {
  content: "\\FDCB";
}

.mdi-phone-off-outline::before {
  content: "\\F01D1";
}

.mdi-phone-outgoing::before {
  content: "\\F3FB";
}

.mdi-phone-outgoing-outline::before {
  content: "\\F01C4";
}

.mdi-phone-outline::before {
  content: "\\FDCC";
}

.mdi-phone-paused::before {
  content: "\\F3FC";
}

.mdi-phone-paused-outline::before {
  content: "\\F01C5";
}

.mdi-phone-plus::before {
  content: "\\F659";
}

.mdi-phone-plus-outline::before {
  content: "\\F01C6";
}

.mdi-phone-return::before {
  content: "\\F82E";
}

.mdi-phone-return-outline::before {
  content: "\\F01C7";
}

.mdi-phone-ring::before {
  content: "\\F01D6";
}

.mdi-phone-ring-outline::before {
  content: "\\F01D7";
}

.mdi-phone-rotate-landscape::before {
  content: "\\F884";
}

.mdi-phone-rotate-portrait::before {
  content: "\\F885";
}

.mdi-phone-settings::before {
  content: "\\F3FD";
}

.mdi-phone-settings-outline::before {
  content: "\\F01C8";
}

.mdi-phone-voip::before {
  content: "\\F3FE";
}

.mdi-pi::before {
  content: "\\F3FF";
}

.mdi-pi-box::before {
  content: "\\F400";
}

.mdi-pi-hole::before {
  content: "\\FDCD";
}

.mdi-piano::before {
  content: "\\F67C";
}

.mdi-pickaxe::before {
  content: "\\F8B6";
}

.mdi-picture-in-picture-bottom-right::before {
  content: "\\FE3A";
}

.mdi-picture-in-picture-bottom-right-outline::before {
  content: "\\FE3B";
}

.mdi-picture-in-picture-top-right::before {
  content: "\\FE3C";
}

.mdi-picture-in-picture-top-right-outline::before {
  content: "\\FE3D";
}

.mdi-pier::before {
  content: "\\F886";
}

.mdi-pier-crane::before {
  content: "\\F887";
}

.mdi-pig::before {
  content: "\\F401";
}

.mdi-pig-variant::before {
  content: "\\F0028";
}

.mdi-piggy-bank::before {
  content: "\\F0029";
}

.mdi-pill::before {
  content: "\\F402";
}

.mdi-pillar::before {
  content: "\\F701";
}

.mdi-pin::before {
  content: "\\F403";
}

.mdi-pin-off::before {
  content: "\\F404";
}

.mdi-pin-off-outline::before {
  content: "\\F92F";
}

.mdi-pin-outline::before {
  content: "\\F930";
}

.mdi-pine-tree::before {
  content: "\\F405";
}

.mdi-pine-tree-box::before {
  content: "\\F406";
}

.mdi-pinterest::before {
  content: "\\F407";
}

.mdi-pinterest-box::before {
  content: "\\F408";
}

.mdi-pinwheel::before {
  content: "\\FAD4";
}

.mdi-pinwheel-outline::before {
  content: "\\FAD5";
}

.mdi-pipe::before {
  content: "\\F7E4";
}

.mdi-pipe-disconnected::before {
  content: "\\F7E5";
}

.mdi-pipe-leak::before {
  content: "\\F888";
}

.mdi-pirate::before {
  content: "\\FA07";
}

.mdi-pistol::before {
  content: "\\F702";
}

.mdi-piston::before {
  content: "\\F889";
}

.mdi-pizza::before {
  content: "\\F409";
}

.mdi-play::before {
  content: "\\F40A";
}

.mdi-play-box::before {
  content: "\\F02A5";
}

.mdi-play-box-outline::before {
  content: "\\F40B";
}

.mdi-play-circle::before {
  content: "\\F40C";
}

.mdi-play-circle-outline::before {
  content: "\\F40D";
}

.mdi-play-network::before {
  content: "\\F88A";
}

.mdi-play-network-outline::before {
  content: "\\FC93";
}

.mdi-play-outline::before {
  content: "\\FF38";
}

.mdi-play-pause::before {
  content: "\\F40E";
}

.mdi-play-protected-content::before {
  content: "\\F40F";
}

.mdi-play-speed::before {
  content: "\\F8FE";
}

.mdi-playlist-check::before {
  content: "\\F5C7";
}

.mdi-playlist-edit::before {
  content: "\\F8FF";
}

.mdi-playlist-minus::before {
  content: "\\F410";
}

.mdi-playlist-music::before {
  content: "\\FC94";
}

.mdi-playlist-music-outline::before {
  content: "\\FC95";
}

.mdi-playlist-play::before {
  content: "\\F411";
}

.mdi-playlist-plus::before {
  content: "\\F412";
}

.mdi-playlist-remove::before {
  content: "\\F413";
}

.mdi-playlist-star::before {
  content: "\\FDCE";
}

.mdi-playstation::before {
  content: "\\F414";
}

.mdi-plex::before {
  content: "\\F6B9";
}

.mdi-plus::before {
  content: "\\F415";
}

.mdi-plus-box::before {
  content: "\\F416";
}

.mdi-plus-box-multiple::before {
  content: "\\F334";
}

.mdi-plus-box-multiple-outline::before {
  content: "\\F016E";
}

.mdi-plus-box-outline::before {
  content: "\\F703";
}

.mdi-plus-circle::before {
  content: "\\F417";
}

.mdi-plus-circle-multiple-outline::before {
  content: "\\F418";
}

.mdi-plus-circle-outline::before {
  content: "\\F419";
}

.mdi-plus-minus::before {
  content: "\\F991";
}

.mdi-plus-minus-box::before {
  content: "\\F992";
}

.mdi-plus-network::before {
  content: "\\F41A";
}

.mdi-plus-network-outline::before {
  content: "\\FC96";
}

.mdi-plus-one::before {
  content: "\\F41B";
}

.mdi-plus-outline::before {
  content: "\\F704";
}

.mdi-plus-thick::before {
  content: "\\F0217";
}

.mdi-pocket::before {
  content: "\\F41C";
}

.mdi-podcast::before {
  content: "\\F993";
}

.mdi-podium::before {
  content: "\\FD01";
}

.mdi-podium-bronze::before {
  content: "\\FD02";
}

.mdi-podium-gold::before {
  content: "\\FD03";
}

.mdi-podium-silver::before {
  content: "\\FD04";
}

.mdi-point-of-sale::before {
  content: "\\FD6E";
}

.mdi-pokeball::before {
  content: "\\F41D";
}

.mdi-pokemon-go::before {
  content: "\\FA08";
}

.mdi-poker-chip::before {
  content: "\\F82F";
}

.mdi-polaroid::before {
  content: "\\F41E";
}

.mdi-police-badge::before {
  content: "\\F0192";
}

.mdi-police-badge-outline::before {
  content: "\\F0193";
}

.mdi-poll::before {
  content: "\\F41F";
}

.mdi-poll-box::before {
  content: "\\F420";
}

.mdi-poll-box-outline::before {
  content: "\\F02A6";
}

.mdi-polymer::before {
  content: "\\F421";
}

.mdi-pool::before {
  content: "\\F606";
}

.mdi-popcorn::before {
  content: "\\F422";
}

.mdi-post::before {
  content: "\\F002A";
}

.mdi-post-outline::before {
  content: "\\F002B";
}

.mdi-postage-stamp::before {
  content: "\\FC97";
}

.mdi-pot::before {
  content: "\\F65A";
}

.mdi-pot-mix::before {
  content: "\\F65B";
}

.mdi-pound::before {
  content: "\\F423";
}

.mdi-pound-box::before {
  content: "\\F424";
}

.mdi-pound-box-outline::before {
  content: "\\F01AA";
}

.mdi-power::before {
  content: "\\F425";
}

.mdi-power-cycle::before {
  content: "\\F900";
}

.mdi-power-off::before {
  content: "\\F901";
}

.mdi-power-on::before {
  content: "\\F902";
}

.mdi-power-plug::before {
  content: "\\F6A4";
}

.mdi-power-plug-off::before {
  content: "\\F6A5";
}

.mdi-power-settings::before {
  content: "\\F426";
}

.mdi-power-sleep::before {
  content: "\\F903";
}

.mdi-power-socket::before {
  content: "\\F427";
}

.mdi-power-socket-au::before {
  content: "\\F904";
}

.mdi-power-socket-de::before {
  content: "\\F0132";
}

.mdi-power-socket-eu::before {
  content: "\\F7E6";
}

.mdi-power-socket-fr::before {
  content: "\\F0133";
}

.mdi-power-socket-jp::before {
  content: "\\F0134";
}

.mdi-power-socket-uk::before {
  content: "\\F7E7";
}

.mdi-power-socket-us::before {
  content: "\\F7E8";
}

.mdi-power-standby::before {
  content: "\\F905";
}

.mdi-powershell::before {
  content: "\\FA09";
}

.mdi-prescription::before {
  content: "\\F705";
}

.mdi-presentation::before {
  content: "\\F428";
}

.mdi-presentation-play::before {
  content: "\\F429";
}

.mdi-printer::before {
  content: "\\F42A";
}

.mdi-printer-3d::before {
  content: "\\F42B";
}

.mdi-printer-3d-nozzle::before {
  content: "\\FE3E";
}

.mdi-printer-3d-nozzle-alert::before {
  content: "\\F01EB";
}

.mdi-printer-3d-nozzle-alert-outline::before {
  content: "\\F01EC";
}

.mdi-printer-3d-nozzle-outline::before {
  content: "\\FE3F";
}

.mdi-printer-alert::before {
  content: "\\F42C";
}

.mdi-printer-check::before {
  content: "\\F0171";
}

.mdi-printer-off::before {
  content: "\\FE40";
}

.mdi-printer-pos::before {
  content: "\\F0079";
}

.mdi-printer-settings::before {
  content: "\\F706";
}

.mdi-printer-wireless::before {
  content: "\\FA0A";
}

.mdi-priority-high::before {
  content: "\\F603";
}

.mdi-priority-low::before {
  content: "\\F604";
}

.mdi-professional-hexagon::before {
  content: "\\F42D";
}

.mdi-progress-alert::before {
  content: "\\FC98";
}

.mdi-progress-check::before {
  content: "\\F994";
}

.mdi-progress-clock::before {
  content: "\\F995";
}

.mdi-progress-close::before {
  content: "\\F0135";
}

.mdi-progress-download::before {
  content: "\\F996";
}

.mdi-progress-upload::before {
  content: "\\F997";
}

.mdi-progress-wrench::before {
  content: "\\FC99";
}

.mdi-projector::before {
  content: "\\F42E";
}

.mdi-projector-screen::before {
  content: "\\F42F";
}

.mdi-protocol::before {
  content: "\\FFF9";
}

.mdi-publish::before {
  content: "\\F6A6";
}

.mdi-pulse::before {
  content: "\\F430";
}

.mdi-pumpkin::before {
  content: "\\FB9B";
}

.mdi-purse::before {
  content: "\\FF39";
}

.mdi-purse-outline::before {
  content: "\\FF3A";
}

.mdi-puzzle::before {
  content: "\\F431";
}

.mdi-puzzle-outline::before {
  content: "\\FA65";
}

.mdi-qi::before {
  content: "\\F998";
}

.mdi-qqchat::before {
  content: "\\F605";
}

.mdi-qrcode::before {
  content: "\\F432";
}

.mdi-qrcode-edit::before {
  content: "\\F8B7";
}

.mdi-qrcode-minus::before {
  content: "\\F01B7";
}

.mdi-qrcode-plus::before {
  content: "\\F01B6";
}

.mdi-qrcode-remove::before {
  content: "\\F01B8";
}

.mdi-qrcode-scan::before {
  content: "\\F433";
}

.mdi-quadcopter::before {
  content: "\\F434";
}

.mdi-quality-high::before {
  content: "\\F435";
}

.mdi-quality-low::before {
  content: "\\FA0B";
}

.mdi-quality-medium::before {
  content: "\\FA0C";
}

.mdi-quicktime::before {
  content: "\\F436";
}

.mdi-quora::before {
  content: "\\FD05";
}

.mdi-rabbit::before {
  content: "\\F906";
}

.mdi-racing-helmet::before {
  content: "\\FD6F";
}

.mdi-racquetball::before {
  content: "\\FD70";
}

.mdi-radar::before {
  content: "\\F437";
}

.mdi-radiator::before {
  content: "\\F438";
}

.mdi-radiator-disabled::before {
  content: "\\FAD6";
}

.mdi-radiator-off::before {
  content: "\\FAD7";
}

.mdi-radio::before {
  content: "\\F439";
}

.mdi-radio-am::before {
  content: "\\FC9A";
}

.mdi-radio-fm::before {
  content: "\\FC9B";
}

.mdi-radio-handheld::before {
  content: "\\F43A";
}

.mdi-radio-off::before {
  content: "\\F0247";
}

.mdi-radio-tower::before {
  content: "\\F43B";
}

.mdi-radioactive::before {
  content: "\\F43C";
}

.mdi-radioactive-off::before {
  content: "\\FEDE";
}

.mdi-radiobox-blank::before {
  content: "\\F43D";
}

.mdi-radiobox-marked::before {
  content: "\\F43E";
}

.mdi-radius::before {
  content: "\\FC9C";
}

.mdi-radius-outline::before {
  content: "\\FC9D";
}

.mdi-railroad-light::before {
  content: "\\FF3B";
}

.mdi-raspberry-pi::before {
  content: "\\F43F";
}

.mdi-ray-end::before {
  content: "\\F440";
}

.mdi-ray-end-arrow::before {
  content: "\\F441";
}

.mdi-ray-start::before {
  content: "\\F442";
}

.mdi-ray-start-arrow::before {
  content: "\\F443";
}

.mdi-ray-start-end::before {
  content: "\\F444";
}

.mdi-ray-vertex::before {
  content: "\\F445";
}

.mdi-react::before {
  content: "\\F707";
}

.mdi-read::before {
  content: "\\F447";
}

.mdi-receipt::before {
  content: "\\F449";
}

.mdi-record::before {
  content: "\\F44A";
}

.mdi-record-circle::before {
  content: "\\FEDF";
}

.mdi-record-circle-outline::before {
  content: "\\FEE0";
}

.mdi-record-player::before {
  content: "\\F999";
}

.mdi-record-rec::before {
  content: "\\F44B";
}

.mdi-rectangle::before {
  content: "\\FE41";
}

.mdi-rectangle-outline::before {
  content: "\\FE42";
}

.mdi-recycle::before {
  content: "\\F44C";
}

.mdi-reddit::before {
  content: "\\F44D";
}

.mdi-redhat::before {
  content: "\\F0146";
}

.mdi-redo::before {
  content: "\\F44E";
}

.mdi-redo-variant::before {
  content: "\\F44F";
}

.mdi-reflect-horizontal::before {
  content: "\\FA0D";
}

.mdi-reflect-vertical::before {
  content: "\\FA0E";
}

.mdi-refresh::before {
  content: "\\F450";
}

.mdi-regex::before {
  content: "\\F451";
}

.mdi-registered-trademark::before {
  content: "\\FA66";
}

.mdi-relative-scale::before {
  content: "\\F452";
}

.mdi-reload::before {
  content: "\\F453";
}

.mdi-reload-alert::before {
  content: "\\F0136";
}

.mdi-reminder::before {
  content: "\\F88B";
}

.mdi-remote::before {
  content: "\\F454";
}

.mdi-remote-desktop::before {
  content: "\\F8B8";
}

.mdi-remote-off::before {
  content: "\\FEE1";
}

.mdi-remote-tv::before {
  content: "\\FEE2";
}

.mdi-remote-tv-off::before {
  content: "\\FEE3";
}

.mdi-rename-box::before {
  content: "\\F455";
}

.mdi-reorder-horizontal::before {
  content: "\\F687";
}

.mdi-reorder-vertical::before {
  content: "\\F688";
}

.mdi-repeat::before {
  content: "\\F456";
}

.mdi-repeat-off::before {
  content: "\\F457";
}

.mdi-repeat-once::before {
  content: "\\F458";
}

.mdi-replay::before {
  content: "\\F459";
}

.mdi-reply::before {
  content: "\\F45A";
}

.mdi-reply-all::before {
  content: "\\F45B";
}

.mdi-reply-all-outline::before {
  content: "\\FF3C";
}

.mdi-reply-circle::before {
  content: "\\F01D9";
}

.mdi-reply-outline::before {
  content: "\\FF3D";
}

.mdi-reproduction::before {
  content: "\\F45C";
}

.mdi-resistor::before {
  content: "\\FB1F";
}

.mdi-resistor-nodes::before {
  content: "\\FB20";
}

.mdi-resize::before {
  content: "\\FA67";
}

.mdi-resize-bottom-right::before {
  content: "\\F45D";
}

.mdi-responsive::before {
  content: "\\F45E";
}

.mdi-restart::before {
  content: "\\F708";
}

.mdi-restart-alert::before {
  content: "\\F0137";
}

.mdi-restart-off::before {
  content: "\\FD71";
}

.mdi-restore::before {
  content: "\\F99A";
}

.mdi-restore-alert::before {
  content: "\\F0138";
}

.mdi-rewind::before {
  content: "\\F45F";
}

.mdi-rewind-10::before {
  content: "\\FD06";
}

.mdi-rewind-30::before {
  content: "\\FD72";
}

.mdi-rewind-5::before {
  content: "\\F0224";
}

.mdi-rewind-outline::before {
  content: "\\F709";
}

.mdi-rhombus::before {
  content: "\\F70A";
}

.mdi-rhombus-medium::before {
  content: "\\FA0F";
}

.mdi-rhombus-outline::before {
  content: "\\F70B";
}

.mdi-rhombus-split::before {
  content: "\\FA10";
}

.mdi-ribbon::before {
  content: "\\F460";
}

.mdi-rice::before {
  content: "\\F7E9";
}

.mdi-ring::before {
  content: "\\F7EA";
}

.mdi-rivet::before {
  content: "\\FE43";
}

.mdi-road::before {
  content: "\\F461";
}

.mdi-road-variant::before {
  content: "\\F462";
}

.mdi-robber::before {
  content: "\\F007A";
}

.mdi-robot::before {
  content: "\\F6A8";
}

.mdi-robot-industrial::before {
  content: "\\FB21";
}

.mdi-robot-mower::before {
  content: "\\F0222";
}

.mdi-robot-mower-outline::before {
  content: "\\F021E";
}

.mdi-robot-vacuum::before {
  content: "\\F70C";
}

.mdi-robot-vacuum-variant::before {
  content: "\\F907";
}

.mdi-rocket::before {
  content: "\\F463";
}

.mdi-roller-skate::before {
  content: "\\FD07";
}

.mdi-rollerblade::before {
  content: "\\FD08";
}

.mdi-rollupjs::before {
  content: "\\FB9C";
}

.mdi-roman-numeral-1::before {
  content: "\\F00B3";
}

.mdi-roman-numeral-10::before {
  content: "\\F00BC";
}

.mdi-roman-numeral-2::before {
  content: "\\F00B4";
}

.mdi-roman-numeral-3::before {
  content: "\\F00B5";
}

.mdi-roman-numeral-4::before {
  content: "\\F00B6";
}

.mdi-roman-numeral-5::before {
  content: "\\F00B7";
}

.mdi-roman-numeral-6::before {
  content: "\\F00B8";
}

.mdi-roman-numeral-7::before {
  content: "\\F00B9";
}

.mdi-roman-numeral-8::before {
  content: "\\F00BA";
}

.mdi-roman-numeral-9::before {
  content: "\\F00BB";
}

.mdi-room-service::before {
  content: "\\F88C";
}

.mdi-room-service-outline::before {
  content: "\\FD73";
}

.mdi-rotate-3d::before {
  content: "\\FEE4";
}

.mdi-rotate-3d-variant::before {
  content: "\\F464";
}

.mdi-rotate-left::before {
  content: "\\F465";
}

.mdi-rotate-left-variant::before {
  content: "\\F466";
}

.mdi-rotate-orbit::before {
  content: "\\FD74";
}

.mdi-rotate-right::before {
  content: "\\F467";
}

.mdi-rotate-right-variant::before {
  content: "\\F468";
}

.mdi-rounded-corner::before {
  content: "\\F607";
}

.mdi-router::before {
  content: "\\F020D";
}

.mdi-router-wireless::before {
  content: "\\F469";
}

.mdi-router-wireless-settings::before {
  content: "\\FA68";
}

.mdi-routes::before {
  content: "\\F46A";
}

.mdi-routes-clock::before {
  content: "\\F007B";
}

.mdi-rowing::before {
  content: "\\F608";
}

.mdi-rss::before {
  content: "\\F46B";
}

.mdi-rss-box::before {
  content: "\\F46C";
}

.mdi-rss-off::before {
  content: "\\FF3E";
}

.mdi-ruby::before {
  content: "\\FD09";
}

.mdi-rugby::before {
  content: "\\FD75";
}

.mdi-ruler::before {
  content: "\\F46D";
}

.mdi-ruler-square::before {
  content: "\\FC9E";
}

.mdi-ruler-square-compass::before {
  content: "\\FEDB";
}

.mdi-run::before {
  content: "\\F70D";
}

.mdi-run-fast::before {
  content: "\\F46E";
}

.mdi-rv-truck::before {
  content: "\\F01FF";
}

.mdi-sack::before {
  content: "\\FD0A";
}

.mdi-sack-percent::before {
  content: "\\FD0B";
}

.mdi-safe::before {
  content: "\\FA69";
}

.mdi-safe-square::before {
  content: "\\F02A7";
}

.mdi-safe-square-outline::before {
  content: "\\F02A8";
}

.mdi-safety-goggles::before {
  content: "\\FD0C";
}

.mdi-sailing::before {
  content: "\\FEE5";
}

.mdi-sale::before {
  content: "\\F46F";
}

.mdi-salesforce::before {
  content: "\\F88D";
}

.mdi-sass::before {
  content: "\\F7EB";
}

.mdi-satellite::before {
  content: "\\F470";
}

.mdi-satellite-uplink::before {
  content: "\\F908";
}

.mdi-satellite-variant::before {
  content: "\\F471";
}

.mdi-sausage::before {
  content: "\\F8B9";
}

.mdi-saw-blade::before {
  content: "\\FE44";
}

.mdi-saxophone::before {
  content: "\\F609";
}

.mdi-scale::before {
  content: "\\F472";
}

.mdi-scale-balance::before {
  content: "\\F5D1";
}

.mdi-scale-bathroom::before {
  content: "\\F473";
}

.mdi-scale-off::before {
  content: "\\F007C";
}

.mdi-scanner::before {
  content: "\\F6AA";
}

.mdi-scanner-off::before {
  content: "\\F909";
}

.mdi-scatter-plot::before {
  content: "\\FEE6";
}

.mdi-scatter-plot-outline::before {
  content: "\\FEE7";
}

.mdi-school::before {
  content: "\\F474";
}

.mdi-school-outline::before {
  content: "\\F01AB";
}

.mdi-scissors-cutting::before {
  content: "\\FA6A";
}

.mdi-scooter::before {
  content: "\\F0214";
}

.mdi-scoreboard::before {
  content: "\\F02A9";
}

.mdi-scoreboard-outline::before {
  content: "\\F02AA";
}

.mdi-screen-rotation::before {
  content: "\\F475";
}

.mdi-screen-rotation-lock::before {
  content: "\\F476";
}

.mdi-screw-flat-top::before {
  content: "\\FDCF";
}

.mdi-screw-lag::before {
  content: "\\FE54";
}

.mdi-screw-machine-flat-top::before {
  content: "\\FE55";
}

.mdi-screw-machine-round-top::before {
  content: "\\FE56";
}

.mdi-screw-round-top::before {
  content: "\\FE57";
}

.mdi-screwdriver::before {
  content: "\\F477";
}

.mdi-script::before {
  content: "\\FB9D";
}

.mdi-script-outline::before {
  content: "\\F478";
}

.mdi-script-text::before {
  content: "\\FB9E";
}

.mdi-script-text-outline::before {
  content: "\\FB9F";
}

.mdi-sd::before {
  content: "\\F479";
}

.mdi-seal::before {
  content: "\\F47A";
}

.mdi-seal-variant::before {
  content: "\\FFFA";
}

.mdi-search-web::before {
  content: "\\F70E";
}

.mdi-seat::before {
  content: "\\FC9F";
}

.mdi-seat-flat::before {
  content: "\\F47B";
}

.mdi-seat-flat-angled::before {
  content: "\\F47C";
}

.mdi-seat-individual-suite::before {
  content: "\\F47D";
}

.mdi-seat-legroom-extra::before {
  content: "\\F47E";
}

.mdi-seat-legroom-normal::before {
  content: "\\F47F";
}

.mdi-seat-legroom-reduced::before {
  content: "\\F480";
}

.mdi-seat-outline::before {
  content: "\\FCA0";
}

.mdi-seat-passenger::before {
  content: "\\F0274";
}

.mdi-seat-recline-extra::before {
  content: "\\F481";
}

.mdi-seat-recline-normal::before {
  content: "\\F482";
}

.mdi-seatbelt::before {
  content: "\\FCA1";
}

.mdi-security::before {
  content: "\\F483";
}

.mdi-security-network::before {
  content: "\\F484";
}

.mdi-seed::before {
  content: "\\FE45";
}

.mdi-seed-outline::before {
  content: "\\FE46";
}

.mdi-segment::before {
  content: "\\FEE8";
}

.mdi-select::before {
  content: "\\F485";
}

.mdi-select-all::before {
  content: "\\F486";
}

.mdi-select-color::before {
  content: "\\FD0D";
}

.mdi-select-compare::before {
  content: "\\FAD8";
}

.mdi-select-drag::before {
  content: "\\FA6B";
}

.mdi-select-group::before {
  content: "\\FF9F";
}

.mdi-select-inverse::before {
  content: "\\F487";
}

.mdi-select-marker::before {
  content: "\\F02AB";
}

.mdi-select-multiple::before {
  content: "\\F02AC";
}

.mdi-select-multiple-marker::before {
  content: "\\F02AD";
}

.mdi-select-off::before {
  content: "\\F488";
}

.mdi-select-place::before {
  content: "\\FFFB";
}

.mdi-select-search::before {
  content: "\\F022F";
}

.mdi-selection::before {
  content: "\\F489";
}

.mdi-selection-drag::before {
  content: "\\FA6C";
}

.mdi-selection-ellipse::before {
  content: "\\FD0E";
}

.mdi-selection-ellipse-arrow-inside::before {
  content: "\\FF3F";
}

.mdi-selection-marker::before {
  content: "\\F02AE";
}

.mdi-selection-multiple-marker::before {
  content: "\\F02AF";
}

.mdi-selection-mutliple::before {
  content: "\\F02B0";
}

.mdi-selection-off::before {
  content: "\\F776";
}

.mdi-selection-search::before {
  content: "\\F0230";
}

.mdi-semantic-web::before {
  content: "\\F0341";
}

.mdi-send::before {
  content: "\\F48A";
}

.mdi-send-check::before {
  content: "\\F018C";
}

.mdi-send-check-outline::before {
  content: "\\F018D";
}

.mdi-send-circle::before {
  content: "\\FE58";
}

.mdi-send-circle-outline::before {
  content: "\\FE59";
}

.mdi-send-clock::before {
  content: "\\F018E";
}

.mdi-send-clock-outline::before {
  content: "\\F018F";
}

.mdi-send-lock::before {
  content: "\\F7EC";
}

.mdi-send-lock-outline::before {
  content: "\\F0191";
}

.mdi-send-outline::before {
  content: "\\F0190";
}

.mdi-serial-port::before {
  content: "\\F65C";
}

.mdi-server::before {
  content: "\\F48B";
}

.mdi-server-minus::before {
  content: "\\F48C";
}

.mdi-server-network::before {
  content: "\\F48D";
}

.mdi-server-network-off::before {
  content: "\\F48E";
}

.mdi-server-off::before {
  content: "\\F48F";
}

.mdi-server-plus::before {
  content: "\\F490";
}

.mdi-server-remove::before {
  content: "\\F491";
}

.mdi-server-security::before {
  content: "\\F492";
}

.mdi-set-all::before {
  content: "\\F777";
}

.mdi-set-center::before {
  content: "\\F778";
}

.mdi-set-center-right::before {
  content: "\\F779";
}

.mdi-set-left::before {
  content: "\\F77A";
}

.mdi-set-left-center::before {
  content: "\\F77B";
}

.mdi-set-left-right::before {
  content: "\\F77C";
}

.mdi-set-none::before {
  content: "\\F77D";
}

.mdi-set-right::before {
  content: "\\F77E";
}

.mdi-set-top-box::before {
  content: "\\F99E";
}

.mdi-settings::before {
  content: "\\F493";
}

.mdi-settings-box::before {
  content: "\\F494";
}

.mdi-settings-helper::before {
  content: "\\FA6D";
}

.mdi-settings-outline::before {
  content: "\\F8BA";
}

.mdi-settings-transfer::before {
  content: "\\F007D";
}

.mdi-settings-transfer-outline::before {
  content: "\\F007E";
}

.mdi-shaker::before {
  content: "\\F0139";
}

.mdi-shaker-outline::before {
  content: "\\F013A";
}

.mdi-shape::before {
  content: "\\F830";
}

.mdi-shape-circle-plus::before {
  content: "\\F65D";
}

.mdi-shape-outline::before {
  content: "\\F831";
}

.mdi-shape-oval-plus::before {
  content: "\\F0225";
}

.mdi-shape-plus::before {
  content: "\\F495";
}

.mdi-shape-polygon-plus::before {
  content: "\\F65E";
}

.mdi-shape-rectangle-plus::before {
  content: "\\F65F";
}

.mdi-shape-square-plus::before {
  content: "\\F660";
}

.mdi-share::before {
  content: "\\F496";
}

.mdi-share-all::before {
  content: "\\F021F";
}

.mdi-share-all-outline::before {
  content: "\\F0220";
}

.mdi-share-circle::before {
  content: "\\F01D8";
}

.mdi-share-off::before {
  content: "\\FF40";
}

.mdi-share-off-outline::before {
  content: "\\FF41";
}

.mdi-share-outline::before {
  content: "\\F931";
}

.mdi-share-variant::before {
  content: "\\F497";
}

.mdi-sheep::before {
  content: "\\FCA2";
}

.mdi-shield::before {
  content: "\\F498";
}

.mdi-shield-account::before {
  content: "\\F88E";
}

.mdi-shield-account-outline::before {
  content: "\\FA11";
}

.mdi-shield-airplane::before {
  content: "\\F6BA";
}

.mdi-shield-airplane-outline::before {
  content: "\\FCA3";
}

.mdi-shield-alert::before {
  content: "\\FEE9";
}

.mdi-shield-alert-outline::before {
  content: "\\FEEA";
}

.mdi-shield-car::before {
  content: "\\FFA0";
}

.mdi-shield-check::before {
  content: "\\F565";
}

.mdi-shield-check-outline::before {
  content: "\\FCA4";
}

.mdi-shield-cross::before {
  content: "\\FCA5";
}

.mdi-shield-cross-outline::before {
  content: "\\FCA6";
}

.mdi-shield-edit::before {
  content: "\\F01CB";
}

.mdi-shield-edit-outline::before {
  content: "\\F01CC";
}

.mdi-shield-half-full::before {
  content: "\\F77F";
}

.mdi-shield-home::before {
  content: "\\F689";
}

.mdi-shield-home-outline::before {
  content: "\\FCA7";
}

.mdi-shield-key::before {
  content: "\\FBA0";
}

.mdi-shield-key-outline::before {
  content: "\\FBA1";
}

.mdi-shield-link-variant::before {
  content: "\\FD0F";
}

.mdi-shield-link-variant-outline::before {
  content: "\\FD10";
}

.mdi-shield-lock::before {
  content: "\\F99C";
}

.mdi-shield-lock-outline::before {
  content: "\\FCA8";
}

.mdi-shield-off::before {
  content: "\\F99D";
}

.mdi-shield-off-outline::before {
  content: "\\F99B";
}

.mdi-shield-outline::before {
  content: "\\F499";
}

.mdi-shield-plus::before {
  content: "\\FAD9";
}

.mdi-shield-plus-outline::before {
  content: "\\FADA";
}

.mdi-shield-refresh::before {
  content: "\\F01CD";
}

.mdi-shield-refresh-outline::before {
  content: "\\F01CE";
}

.mdi-shield-remove::before {
  content: "\\FADB";
}

.mdi-shield-remove-outline::before {
  content: "\\FADC";
}

.mdi-shield-search::before {
  content: "\\FD76";
}

.mdi-shield-star::before {
  content: "\\F0166";
}

.mdi-shield-star-outline::before {
  content: "\\F0167";
}

.mdi-shield-sun::before {
  content: "\\F007F";
}

.mdi-shield-sun-outline::before {
  content: "\\F0080";
}

.mdi-ship-wheel::before {
  content: "\\F832";
}

.mdi-shoe-formal::before {
  content: "\\FB22";
}

.mdi-shoe-heel::before {
  content: "\\FB23";
}

.mdi-shoe-print::before {
  content: "\\FE5A";
}

.mdi-shopify::before {
  content: "\\FADD";
}

.mdi-shopping::before {
  content: "\\F49A";
}

.mdi-shopping-music::before {
  content: "\\F49B";
}

.mdi-shopping-outline::before {
  content: "\\F0200";
}

.mdi-shopping-search::before {
  content: "\\FFA1";
}

.mdi-shovel::before {
  content: "\\F70F";
}

.mdi-shovel-off::before {
  content: "\\F710";
}

.mdi-shower::before {
  content: "\\F99F";
}

.mdi-shower-head::before {
  content: "\\F9A0";
}

.mdi-shredder::before {
  content: "\\F49C";
}

.mdi-shuffle::before {
  content: "\\F49D";
}

.mdi-shuffle-disabled::before {
  content: "\\F49E";
}

.mdi-shuffle-variant::before {
  content: "\\F49F";
}

.mdi-sigma::before {
  content: "\\F4A0";
}

.mdi-sigma-lower::before {
  content: "\\F62B";
}

.mdi-sign-caution::before {
  content: "\\F4A1";
}

.mdi-sign-direction::before {
  content: "\\F780";
}

.mdi-sign-direction-minus::before {
  content: "\\F0022";
}

.mdi-sign-direction-plus::before {
  content: "\\FFFD";
}

.mdi-sign-direction-remove::before {
  content: "\\FFFE";
}

.mdi-sign-real-estate::before {
  content: "\\F0143";
}

.mdi-sign-text::before {
  content: "\\F781";
}

.mdi-signal::before {
  content: "\\F4A2";
}

.mdi-signal-2g::before {
  content: "\\F711";
}

.mdi-signal-3g::before {
  content: "\\F712";
}

.mdi-signal-4g::before {
  content: "\\F713";
}

.mdi-signal-5g::before {
  content: "\\FA6E";
}

.mdi-signal-cellular-1::before {
  content: "\\F8BB";
}

.mdi-signal-cellular-2::before {
  content: "\\F8BC";
}

.mdi-signal-cellular-3::before {
  content: "\\F8BD";
}

.mdi-signal-cellular-outline::before {
  content: "\\F8BE";
}

.mdi-signal-distance-variant::before {
  content: "\\FE47";
}

.mdi-signal-hspa::before {
  content: "\\F714";
}

.mdi-signal-hspa-plus::before {
  content: "\\F715";
}

.mdi-signal-off::before {
  content: "\\F782";
}

.mdi-signal-variant::before {
  content: "\\F60A";
}

.mdi-signature::before {
  content: "\\FE5B";
}

.mdi-signature-freehand::before {
  content: "\\FE5C";
}

.mdi-signature-image::before {
  content: "\\FE5D";
}

.mdi-signature-text::before {
  content: "\\FE5E";
}

.mdi-silo::before {
  content: "\\FB24";
}

.mdi-silverware::before {
  content: "\\F4A3";
}

.mdi-silverware-clean::before {
  content: "\\FFFF";
}

.mdi-silverware-fork::before {
  content: "\\F4A4";
}

.mdi-silverware-fork-knife::before {
  content: "\\FA6F";
}

.mdi-silverware-spoon::before {
  content: "\\F4A5";
}

.mdi-silverware-variant::before {
  content: "\\F4A6";
}

.mdi-sim::before {
  content: "\\F4A7";
}

.mdi-sim-alert::before {
  content: "\\F4A8";
}

.mdi-sim-off::before {
  content: "\\F4A9";
}

.mdi-simple-icons::before {
  content: "\\F0348";
}

.mdi-sina-weibo::before {
  content: "\\FADE";
}

.mdi-sitemap::before {
  content: "\\F4AA";
}

.mdi-skate::before {
  content: "\\FD11";
}

.mdi-skew-less::before {
  content: "\\FD12";
}

.mdi-skew-more::before {
  content: "\\FD13";
}

.mdi-ski::before {
  content: "\\F032F";
}

.mdi-ski-cross-country::before {
  content: "\\F0330";
}

.mdi-ski-water::before {
  content: "\\F0331";
}

.mdi-skip-backward::before {
  content: "\\F4AB";
}

.mdi-skip-backward-outline::before {
  content: "\\FF42";
}

.mdi-skip-forward::before {
  content: "\\F4AC";
}

.mdi-skip-forward-outline::before {
  content: "\\FF43";
}

.mdi-skip-next::before {
  content: "\\F4AD";
}

.mdi-skip-next-circle::before {
  content: "\\F661";
}

.mdi-skip-next-circle-outline::before {
  content: "\\F662";
}

.mdi-skip-next-outline::before {
  content: "\\FF44";
}

.mdi-skip-previous::before {
  content: "\\F4AE";
}

.mdi-skip-previous-circle::before {
  content: "\\F663";
}

.mdi-skip-previous-circle-outline::before {
  content: "\\F664";
}

.mdi-skip-previous-outline::before {
  content: "\\FF45";
}

.mdi-skull::before {
  content: "\\F68B";
}

.mdi-skull-crossbones::before {
  content: "\\FBA2";
}

.mdi-skull-crossbones-outline::before {
  content: "\\FBA3";
}

.mdi-skull-outline::before {
  content: "\\FBA4";
}

.mdi-skype::before {
  content: "\\F4AF";
}

.mdi-skype-business::before {
  content: "\\F4B0";
}

.mdi-slack::before {
  content: "\\F4B1";
}

.mdi-slackware::before {
  content: "\\F90A";
}

.mdi-slash-forward::before {
  content: "\\F0000";
}

.mdi-slash-forward-box::before {
  content: "\\F0001";
}

.mdi-sleep::before {
  content: "\\F4B2";
}

.mdi-sleep-off::before {
  content: "\\F4B3";
}

.mdi-slope-downhill::before {
  content: "\\FE5F";
}

.mdi-slope-uphill::before {
  content: "\\FE60";
}

.mdi-slot-machine::before {
  content: "\\F013F";
}

.mdi-slot-machine-outline::before {
  content: "\\F0140";
}

.mdi-smart-card::before {
  content: "\\F00E8";
}

.mdi-smart-card-outline::before {
  content: "\\F00E9";
}

.mdi-smart-card-reader::before {
  content: "\\F00EA";
}

.mdi-smart-card-reader-outline::before {
  content: "\\F00EB";
}

.mdi-smog::before {
  content: "\\FA70";
}

.mdi-smoke-detector::before {
  content: "\\F392";
}

.mdi-smoking::before {
  content: "\\F4B4";
}

.mdi-smoking-off::before {
  content: "\\F4B5";
}

.mdi-snapchat::before {
  content: "\\F4B6";
}

.mdi-snowboard::before {
  content: "\\F0332";
}

.mdi-snowflake::before {
  content: "\\F716";
}

.mdi-snowflake-alert::before {
  content: "\\FF46";
}

.mdi-snowflake-melt::before {
  content: "\\F02F6";
}

.mdi-snowflake-variant::before {
  content: "\\FF47";
}

.mdi-snowman::before {
  content: "\\F4B7";
}

.mdi-soccer::before {
  content: "\\F4B8";
}

.mdi-soccer-field::before {
  content: "\\F833";
}

.mdi-sofa::before {
  content: "\\F4B9";
}

.mdi-solar-panel::before {
  content: "\\FD77";
}

.mdi-solar-panel-large::before {
  content: "\\FD78";
}

.mdi-solar-power::before {
  content: "\\FA71";
}

.mdi-soldering-iron::before {
  content: "\\F00BD";
}

.mdi-solid::before {
  content: "\\F68C";
}

.mdi-sort::before {
  content: "\\F4BA";
}

.mdi-sort-alphabetical::before {
  content: "\\F4BB";
}

.mdi-sort-alphabetical-ascending::before {
  content: "\\F0173";
}

.mdi-sort-alphabetical-descending::before {
  content: "\\F0174";
}

.mdi-sort-ascending::before {
  content: "\\F4BC";
}

.mdi-sort-descending::before {
  content: "\\F4BD";
}

.mdi-sort-numeric::before {
  content: "\\F4BE";
}

.mdi-sort-variant::before {
  content: "\\F4BF";
}

.mdi-sort-variant-lock::before {
  content: "\\FCA9";
}

.mdi-sort-variant-lock-open::before {
  content: "\\FCAA";
}

.mdi-sort-variant-remove::before {
  content: "\\F0172";
}

.mdi-soundcloud::before {
  content: "\\F4C0";
}

.mdi-source-branch::before {
  content: "\\F62C";
}

.mdi-source-commit::before {
  content: "\\F717";
}

.mdi-source-commit-end::before {
  content: "\\F718";
}

.mdi-source-commit-end-local::before {
  content: "\\F719";
}

.mdi-source-commit-local::before {
  content: "\\F71A";
}

.mdi-source-commit-next-local::before {
  content: "\\F71B";
}

.mdi-source-commit-start::before {
  content: "\\F71C";
}

.mdi-source-commit-start-next-local::before {
  content: "\\F71D";
}

.mdi-source-fork::before {
  content: "\\F4C1";
}

.mdi-source-merge::before {
  content: "\\F62D";
}

.mdi-source-pull::before {
  content: "\\F4C2";
}

.mdi-source-repository::before {
  content: "\\FCAB";
}

.mdi-source-repository-multiple::before {
  content: "\\FCAC";
}

.mdi-soy-sauce::before {
  content: "\\F7ED";
}

.mdi-spa::before {
  content: "\\FCAD";
}

.mdi-spa-outline::before {
  content: "\\FCAE";
}

.mdi-space-invaders::before {
  content: "\\FBA5";
}

.mdi-spade::before {
  content: "\\FE48";
}

.mdi-speaker::before {
  content: "\\F4C3";
}

.mdi-speaker-bluetooth::before {
  content: "\\F9A1";
}

.mdi-speaker-multiple::before {
  content: "\\FD14";
}

.mdi-speaker-off::before {
  content: "\\F4C4";
}

.mdi-speaker-wireless::before {
  content: "\\F71E";
}

.mdi-speedometer::before {
  content: "\\F4C5";
}

.mdi-speedometer-medium::before {
  content: "\\FFA2";
}

.mdi-speedometer-slow::before {
  content: "\\FFA3";
}

.mdi-spellcheck::before {
  content: "\\F4C6";
}

.mdi-spider::before {
  content: "\\F0215";
}

.mdi-spider-thread::before {
  content: "\\F0216";
}

.mdi-spider-web::before {
  content: "\\FBA6";
}

.mdi-spotify::before {
  content: "\\F4C7";
}

.mdi-spotlight::before {
  content: "\\F4C8";
}

.mdi-spotlight-beam::before {
  content: "\\F4C9";
}

.mdi-spray::before {
  content: "\\F665";
}

.mdi-spray-bottle::before {
  content: "\\FADF";
}

.mdi-sprinkler::before {
  content: "\\F0081";
}

.mdi-sprinkler-variant::before {
  content: "\\F0082";
}

.mdi-sprout::before {
  content: "\\FE49";
}

.mdi-sprout-outline::before {
  content: "\\FE4A";
}

.mdi-square::before {
  content: "\\F763";
}

.mdi-square-edit-outline::before {
  content: "\\F90B";
}

.mdi-square-inc::before {
  content: "\\F4CA";
}

.mdi-square-inc-cash::before {
  content: "\\F4CB";
}

.mdi-square-medium::before {
  content: "\\FA12";
}

.mdi-square-medium-outline::before {
  content: "\\FA13";
}

.mdi-square-off::before {
  content: "\\F0319";
}

.mdi-square-off-outline::before {
  content: "\\F031A";
}

.mdi-square-outline::before {
  content: "\\F762";
}

.mdi-square-root::before {
  content: "\\F783";
}

.mdi-square-root-box::before {
  content: "\\F9A2";
}

.mdi-square-small::before {
  content: "\\FA14";
}

.mdi-squeegee::before {
  content: "\\FAE0";
}

.mdi-ssh::before {
  content: "\\F8BF";
}

.mdi-stack-exchange::before {
  content: "\\F60B";
}

.mdi-stack-overflow::before {
  content: "\\F4CC";
}

.mdi-stackpath::before {
  content: "\\F359";
}

.mdi-stadium::before {
  content: "\\F001A";
}

.mdi-stadium-variant::before {
  content: "\\F71F";
}

.mdi-stairs::before {
  content: "\\F4CD";
}

.mdi-stairs-down::before {
  content: "\\F02E9";
}

.mdi-stairs-up::before {
  content: "\\F02E8";
}

.mdi-stamper::before {
  content: "\\FD15";
}

.mdi-standard-definition::before {
  content: "\\F7EE";
}

.mdi-star::before {
  content: "\\F4CE";
}

.mdi-star-box::before {
  content: "\\FA72";
}

.mdi-star-box-multiple::before {
  content: "\\F02B1";
}

.mdi-star-box-multiple-outline::before {
  content: "\\F02B2";
}

.mdi-star-box-outline::before {
  content: "\\FA73";
}

.mdi-star-circle::before {
  content: "\\F4CF";
}

.mdi-star-circle-outline::before {
  content: "\\F9A3";
}

.mdi-star-face::before {
  content: "\\F9A4";
}

.mdi-star-four-points::before {
  content: "\\FAE1";
}

.mdi-star-four-points-outline::before {
  content: "\\FAE2";
}

.mdi-star-half::before {
  content: "\\F4D0";
}

.mdi-star-off::before {
  content: "\\F4D1";
}

.mdi-star-outline::before {
  content: "\\F4D2";
}

.mdi-star-three-points::before {
  content: "\\FAE3";
}

.mdi-star-three-points-outline::before {
  content: "\\FAE4";
}

.mdi-state-machine::before {
  content: "\\F021A";
}

.mdi-steam::before {
  content: "\\F4D3";
}

.mdi-steam-box::before {
  content: "\\F90C";
}

.mdi-steering::before {
  content: "\\F4D4";
}

.mdi-steering-off::before {
  content: "\\F90D";
}

.mdi-step-backward::before {
  content: "\\F4D5";
}

.mdi-step-backward-2::before {
  content: "\\F4D6";
}

.mdi-step-forward::before {
  content: "\\F4D7";
}

.mdi-step-forward-2::before {
  content: "\\F4D8";
}

.mdi-stethoscope::before {
  content: "\\F4D9";
}

.mdi-sticker::before {
  content: "\\F5D0";
}

.mdi-sticker-emoji::before {
  content: "\\F784";
}

.mdi-stocking::before {
  content: "\\F4DA";
}

.mdi-stomach::before {
  content: "\\F00BE";
}

.mdi-stop::before {
  content: "\\F4DB";
}

.mdi-stop-circle::before {
  content: "\\F666";
}

.mdi-stop-circle-outline::before {
  content: "\\F667";
}

.mdi-store::before {
  content: "\\F4DC";
}

.mdi-store-24-hour::before {
  content: "\\F4DD";
}

.mdi-storefront::before {
  content: "\\F00EC";
}

.mdi-stove::before {
  content: "\\F4DE";
}

.mdi-strategy::before {
  content: "\\F0201";
}

.mdi-strava::before {
  content: "\\FB25";
}

.mdi-stretch-to-page::before {
  content: "\\FF48";
}

.mdi-stretch-to-page-outline::before {
  content: "\\FF49";
}

.mdi-string-lights::before {
  content: "\\F02E5";
}

.mdi-string-lights-off::before {
  content: "\\F02E6";
}

.mdi-subdirectory-arrow-left::before {
  content: "\\F60C";
}

.mdi-subdirectory-arrow-right::before {
  content: "\\F60D";
}

.mdi-subtitles::before {
  content: "\\FA15";
}

.mdi-subtitles-outline::before {
  content: "\\FA16";
}

.mdi-subway::before {
  content: "\\F6AB";
}

.mdi-subway-alert-variant::before {
  content: "\\FD79";
}

.mdi-subway-variant::before {
  content: "\\F4DF";
}

.mdi-summit::before {
  content: "\\F785";
}

.mdi-sunglasses::before {
  content: "\\F4E0";
}

.mdi-surround-sound::before {
  content: "\\F5C5";
}

.mdi-surround-sound-2-0::before {
  content: "\\F7EF";
}

.mdi-surround-sound-3-1::before {
  content: "\\F7F0";
}

.mdi-surround-sound-5-1::before {
  content: "\\F7F1";
}

.mdi-surround-sound-7-1::before {
  content: "\\F7F2";
}

.mdi-svg::before {
  content: "\\F720";
}

.mdi-swap-horizontal::before {
  content: "\\F4E1";
}

.mdi-swap-horizontal-bold::before {
  content: "\\FBA9";
}

.mdi-swap-horizontal-circle::before {
  content: "\\F0002";
}

.mdi-swap-horizontal-circle-outline::before {
  content: "\\F0003";
}

.mdi-swap-horizontal-variant::before {
  content: "\\F8C0";
}

.mdi-swap-vertical::before {
  content: "\\F4E2";
}

.mdi-swap-vertical-bold::before {
  content: "\\FBAA";
}

.mdi-swap-vertical-circle::before {
  content: "\\F0004";
}

.mdi-swap-vertical-circle-outline::before {
  content: "\\F0005";
}

.mdi-swap-vertical-variant::before {
  content: "\\F8C1";
}

.mdi-swim::before {
  content: "\\F4E3";
}

.mdi-switch::before {
  content: "\\F4E4";
}

.mdi-sword::before {
  content: "\\F4E5";
}

.mdi-sword-cross::before {
  content: "\\F786";
}

.mdi-symfony::before {
  content: "\\FAE5";
}

.mdi-sync::before {
  content: "\\F4E6";
}

.mdi-sync-alert::before {
  content: "\\F4E7";
}

.mdi-sync-off::before {
  content: "\\F4E8";
}

.mdi-tab::before {
  content: "\\F4E9";
}

.mdi-tab-minus::before {
  content: "\\FB26";
}

.mdi-tab-plus::before {
  content: "\\F75B";
}

.mdi-tab-remove::before {
  content: "\\FB27";
}

.mdi-tab-unselected::before {
  content: "\\F4EA";
}

.mdi-table::before {
  content: "\\F4EB";
}

.mdi-table-border::before {
  content: "\\FA17";
}

.mdi-table-chair::before {
  content: "\\F0083";
}

.mdi-table-column::before {
  content: "\\F834";
}

.mdi-table-column-plus-after::before {
  content: "\\F4EC";
}

.mdi-table-column-plus-before::before {
  content: "\\F4ED";
}

.mdi-table-column-remove::before {
  content: "\\F4EE";
}

.mdi-table-column-width::before {
  content: "\\F4EF";
}

.mdi-table-edit::before {
  content: "\\F4F0";
}

.mdi-table-eye::before {
  content: "\\F00BF";
}

.mdi-table-headers-eye::before {
  content: "\\F0248";
}

.mdi-table-headers-eye-off::before {
  content: "\\F0249";
}

.mdi-table-large::before {
  content: "\\F4F1";
}

.mdi-table-large-plus::before {
  content: "\\FFA4";
}

.mdi-table-large-remove::before {
  content: "\\FFA5";
}

.mdi-table-merge-cells::before {
  content: "\\F9A5";
}

.mdi-table-of-contents::before {
  content: "\\F835";
}

.mdi-table-plus::before {
  content: "\\FA74";
}

.mdi-table-remove::before {
  content: "\\FA75";
}

.mdi-table-row::before {
  content: "\\F836";
}

.mdi-table-row-height::before {
  content: "\\F4F2";
}

.mdi-table-row-plus-after::before {
  content: "\\F4F3";
}

.mdi-table-row-plus-before::before {
  content: "\\F4F4";
}

.mdi-table-row-remove::before {
  content: "\\F4F5";
}

.mdi-table-search::before {
  content: "\\F90E";
}

.mdi-table-settings::before {
  content: "\\F837";
}

.mdi-table-tennis::before {
  content: "\\FE4B";
}

.mdi-tablet::before {
  content: "\\F4F6";
}

.mdi-tablet-android::before {
  content: "\\F4F7";
}

.mdi-tablet-cellphone::before {
  content: "\\F9A6";
}

.mdi-tablet-dashboard::before {
  content: "\\FEEB";
}

.mdi-tablet-ipad::before {
  content: "\\F4F8";
}

.mdi-taco::before {
  content: "\\F761";
}

.mdi-tag::before {
  content: "\\F4F9";
}

.mdi-tag-faces::before {
  content: "\\F4FA";
}

.mdi-tag-heart::before {
  content: "\\F68A";
}

.mdi-tag-heart-outline::before {
  content: "\\FBAB";
}

.mdi-tag-minus::before {
  content: "\\F90F";
}

.mdi-tag-minus-outline::before {
  content: "\\F024A";
}

.mdi-tag-multiple::before {
  content: "\\F4FB";
}

.mdi-tag-multiple-outline::before {
  content: "\\F0322";
}

.mdi-tag-off::before {
  content: "\\F024B";
}

.mdi-tag-off-outline::before {
  content: "\\F024C";
}

.mdi-tag-outline::before {
  content: "\\F4FC";
}

.mdi-tag-plus::before {
  content: "\\F721";
}

.mdi-tag-plus-outline::before {
  content: "\\F024D";
}

.mdi-tag-remove::before {
  content: "\\F722";
}

.mdi-tag-remove-outline::before {
  content: "\\F024E";
}

.mdi-tag-text::before {
  content: "\\F024F";
}

.mdi-tag-text-outline::before {
  content: "\\F4FD";
}

.mdi-tank::before {
  content: "\\FD16";
}

.mdi-tanker-truck::before {
  content: "\\F0006";
}

.mdi-tape-measure::before {
  content: "\\FB28";
}

.mdi-target::before {
  content: "\\F4FE";
}

.mdi-target-account::before {
  content: "\\FBAC";
}

.mdi-target-variant::before {
  content: "\\FA76";
}

.mdi-taxi::before {
  content: "\\F4FF";
}

.mdi-tea::before {
  content: "\\FD7A";
}

.mdi-tea-outline::before {
  content: "\\FD7B";
}

.mdi-teach::before {
  content: "\\F88F";
}

.mdi-teamviewer::before {
  content: "\\F500";
}

.mdi-telegram::before {
  content: "\\F501";
}

.mdi-telescope::before {
  content: "\\FB29";
}

.mdi-television::before {
  content: "\\F502";
}

.mdi-television-box::before {
  content: "\\F838";
}

.mdi-television-classic::before {
  content: "\\F7F3";
}

.mdi-television-classic-off::before {
  content: "\\F839";
}

.mdi-television-clean::before {
  content: "\\F013B";
}

.mdi-television-guide::before {
  content: "\\F503";
}

.mdi-television-off::before {
  content: "\\F83A";
}

.mdi-television-pause::before {
  content: "\\FFA6";
}

.mdi-television-play::before {
  content: "\\FEEC";
}

.mdi-television-stop::before {
  content: "\\FFA7";
}

.mdi-temperature-celsius::before {
  content: "\\F504";
}

.mdi-temperature-fahrenheit::before {
  content: "\\F505";
}

.mdi-temperature-kelvin::before {
  content: "\\F506";
}

.mdi-tennis::before {
  content: "\\FD7C";
}

.mdi-tennis-ball::before {
  content: "\\F507";
}

.mdi-tent::before {
  content: "\\F508";
}

.mdi-terraform::before {
  content: "\\F0084";
}

.mdi-terrain::before {
  content: "\\F509";
}

.mdi-test-tube::before {
  content: "\\F668";
}

.mdi-test-tube-empty::before {
  content: "\\F910";
}

.mdi-test-tube-off::before {
  content: "\\F911";
}

.mdi-text::before {
  content: "\\F9A7";
}

.mdi-text-recognition::before {
  content: "\\F0168";
}

.mdi-text-shadow::before {
  content: "\\F669";
}

.mdi-text-short::before {
  content: "\\F9A8";
}

.mdi-text-subject::before {
  content: "\\F9A9";
}

.mdi-text-to-speech::before {
  content: "\\F50A";
}

.mdi-text-to-speech-off::before {
  content: "\\F50B";
}

.mdi-textarea::before {
  content: "\\F00C0";
}

.mdi-textbox::before {
  content: "\\F60E";
}

.mdi-textbox-password::before {
  content: "\\F7F4";
}

.mdi-texture::before {
  content: "\\F50C";
}

.mdi-texture-box::before {
  content: "\\F0007";
}

.mdi-theater::before {
  content: "\\F50D";
}

.mdi-theme-light-dark::before {
  content: "\\F50E";
}

.mdi-thermometer::before {
  content: "\\F50F";
}

.mdi-thermometer-alert::before {
  content: "\\FE61";
}

.mdi-thermometer-chevron-down::before {
  content: "\\FE62";
}

.mdi-thermometer-chevron-up::before {
  content: "\\FE63";
}

.mdi-thermometer-high::before {
  content: "\\F00ED";
}

.mdi-thermometer-lines::before {
  content: "\\F510";
}

.mdi-thermometer-low::before {
  content: "\\F00EE";
}

.mdi-thermometer-minus::before {
  content: "\\FE64";
}

.mdi-thermometer-plus::before {
  content: "\\FE65";
}

.mdi-thermostat::before {
  content: "\\F393";
}

.mdi-thermostat-box::before {
  content: "\\F890";
}

.mdi-thought-bubble::before {
  content: "\\F7F5";
}

.mdi-thought-bubble-outline::before {
  content: "\\F7F6";
}

.mdi-thumb-down::before {
  content: "\\F511";
}

.mdi-thumb-down-outline::before {
  content: "\\F512";
}

.mdi-thumb-up::before {
  content: "\\F513";
}

.mdi-thumb-up-outline::before {
  content: "\\F514";
}

.mdi-thumbs-up-down::before {
  content: "\\F515";
}

.mdi-ticket::before {
  content: "\\F516";
}

.mdi-ticket-account::before {
  content: "\\F517";
}

.mdi-ticket-confirmation::before {
  content: "\\F518";
}

.mdi-ticket-outline::before {
  content: "\\F912";
}

.mdi-ticket-percent::before {
  content: "\\F723";
}

.mdi-tie::before {
  content: "\\F519";
}

.mdi-tilde::before {
  content: "\\F724";
}

.mdi-timelapse::before {
  content: "\\F51A";
}

.mdi-timeline::before {
  content: "\\FBAD";
}

.mdi-timeline-alert::before {
  content: "\\FFB2";
}

.mdi-timeline-alert-outline::before {
  content: "\\FFB5";
}

.mdi-timeline-clock::before {
  content: "\\F0226";
}

.mdi-timeline-clock-outline::before {
  content: "\\F0227";
}

.mdi-timeline-help::before {
  content: "\\FFB6";
}

.mdi-timeline-help-outline::before {
  content: "\\FFB7";
}

.mdi-timeline-outline::before {
  content: "\\FBAE";
}

.mdi-timeline-plus::before {
  content: "\\FFB3";
}

.mdi-timeline-plus-outline::before {
  content: "\\FFB4";
}

.mdi-timeline-text::before {
  content: "\\FBAF";
}

.mdi-timeline-text-outline::before {
  content: "\\FBB0";
}

.mdi-timer::before {
  content: "\\F51B";
}

.mdi-timer-10::before {
  content: "\\F51C";
}

.mdi-timer-3::before {
  content: "\\F51D";
}

.mdi-timer-off::before {
  content: "\\F51E";
}

.mdi-timer-sand::before {
  content: "\\F51F";
}

.mdi-timer-sand-empty::before {
  content: "\\F6AC";
}

.mdi-timer-sand-full::before {
  content: "\\F78B";
}

.mdi-timetable::before {
  content: "\\F520";
}

.mdi-toaster::before {
  content: "\\F0085";
}

.mdi-toaster-off::before {
  content: "\\F01E2";
}

.mdi-toaster-oven::before {
  content: "\\FCAF";
}

.mdi-toggle-switch::before {
  content: "\\F521";
}

.mdi-toggle-switch-off::before {
  content: "\\F522";
}

.mdi-toggle-switch-off-outline::before {
  content: "\\FA18";
}

.mdi-toggle-switch-outline::before {
  content: "\\FA19";
}

.mdi-toilet::before {
  content: "\\F9AA";
}

.mdi-toolbox::before {
  content: "\\F9AB";
}

.mdi-toolbox-outline::before {
  content: "\\F9AC";
}

.mdi-tools::before {
  content: "\\F0086";
}

.mdi-tooltip::before {
  content: "\\F523";
}

.mdi-tooltip-account::before {
  content: "\\F00C";
}

.mdi-tooltip-edit::before {
  content: "\\F524";
}

.mdi-tooltip-edit-outline::before {
  content: "\\F02F0";
}

.mdi-tooltip-image::before {
  content: "\\F525";
}

.mdi-tooltip-image-outline::before {
  content: "\\FBB1";
}

.mdi-tooltip-outline::before {
  content: "\\F526";
}

.mdi-tooltip-plus::before {
  content: "\\FBB2";
}

.mdi-tooltip-plus-outline::before {
  content: "\\F527";
}

.mdi-tooltip-text::before {
  content: "\\F528";
}

.mdi-tooltip-text-outline::before {
  content: "\\FBB3";
}

.mdi-tooth::before {
  content: "\\F8C2";
}

.mdi-tooth-outline::before {
  content: "\\F529";
}

.mdi-toothbrush::before {
  content: "\\F0154";
}

.mdi-toothbrush-electric::before {
  content: "\\F0157";
}

.mdi-toothbrush-paste::before {
  content: "\\F0155";
}

.mdi-tor::before {
  content: "\\F52A";
}

.mdi-tortoise::before {
  content: "\\FD17";
}

.mdi-toslink::before {
  content: "\\F02E3";
}

.mdi-tournament::before {
  content: "\\F9AD";
}

.mdi-tower-beach::before {
  content: "\\F680";
}

.mdi-tower-fire::before {
  content: "\\F681";
}

.mdi-towing::before {
  content: "\\F83B";
}

.mdi-toy-brick::before {
  content: "\\F02B3";
}

.mdi-toy-brick-marker::before {
  content: "\\F02B4";
}

.mdi-toy-brick-marker-outline::before {
  content: "\\F02B5";
}

.mdi-toy-brick-minus::before {
  content: "\\F02B6";
}

.mdi-toy-brick-minus-outline::before {
  content: "\\F02B7";
}

.mdi-toy-brick-outline::before {
  content: "\\F02B8";
}

.mdi-toy-brick-plus::before {
  content: "\\F02B9";
}

.mdi-toy-brick-plus-outline::before {
  content: "\\F02BA";
}

.mdi-toy-brick-remove::before {
  content: "\\F02BB";
}

.mdi-toy-brick-remove-outline::before {
  content: "\\F02BC";
}

.mdi-toy-brick-search::before {
  content: "\\F02BD";
}

.mdi-toy-brick-search-outline::before {
  content: "\\F02BE";
}

.mdi-track-light::before {
  content: "\\F913";
}

.mdi-trackpad::before {
  content: "\\F7F7";
}

.mdi-trackpad-lock::before {
  content: "\\F932";
}

.mdi-tractor::before {
  content: "\\F891";
}

.mdi-trademark::before {
  content: "\\FA77";
}

.mdi-traffic-light::before {
  content: "\\F52B";
}

.mdi-train::before {
  content: "\\F52C";
}

.mdi-train-car::before {
  content: "\\FBB4";
}

.mdi-train-variant::before {
  content: "\\F8C3";
}

.mdi-tram::before {
  content: "\\F52D";
}

.mdi-tram-side::before {
  content: "\\F0008";
}

.mdi-transcribe::before {
  content: "\\F52E";
}

.mdi-transcribe-close::before {
  content: "\\F52F";
}

.mdi-transfer::before {
  content: "\\F0087";
}

.mdi-transfer-down::before {
  content: "\\FD7D";
}

.mdi-transfer-left::before {
  content: "\\FD7E";
}

.mdi-transfer-right::before {
  content: "\\F530";
}

.mdi-transfer-up::before {
  content: "\\FD7F";
}

.mdi-transit-connection::before {
  content: "\\FD18";
}

.mdi-transit-connection-variant::before {
  content: "\\FD19";
}

.mdi-transit-detour::before {
  content: "\\FFA8";
}

.mdi-transit-transfer::before {
  content: "\\F6AD";
}

.mdi-transition::before {
  content: "\\F914";
}

.mdi-transition-masked::before {
  content: "\\F915";
}

.mdi-translate::before {
  content: "\\F5CA";
}

.mdi-translate-off::before {
  content: "\\FE66";
}

.mdi-transmission-tower::before {
  content: "\\FD1A";
}

.mdi-trash-can::before {
  content: "\\FA78";
}

.mdi-trash-can-outline::before {
  content: "\\FA79";
}

.mdi-tray::before {
  content: "\\F02BF";
}

.mdi-tray-alert::before {
  content: "\\F02C0";
}

.mdi-tray-full::before {
  content: "\\F02C1";
}

.mdi-tray-minus::before {
  content: "\\F02C2";
}

.mdi-tray-plus::before {
  content: "\\F02C3";
}

.mdi-tray-remove::before {
  content: "\\F02C4";
}

.mdi-treasure-chest::before {
  content: "\\F725";
}

.mdi-tree::before {
  content: "\\F531";
}

.mdi-tree-outline::before {
  content: "\\FE4C";
}

.mdi-trello::before {
  content: "\\F532";
}

.mdi-trending-down::before {
  content: "\\F533";
}

.mdi-trending-neutral::before {
  content: "\\F534";
}

.mdi-trending-up::before {
  content: "\\F535";
}

.mdi-triangle::before {
  content: "\\F536";
}

.mdi-triangle-outline::before {
  content: "\\F537";
}

.mdi-triforce::before {
  content: "\\FBB5";
}

.mdi-trophy::before {
  content: "\\F538";
}

.mdi-trophy-award::before {
  content: "\\F539";
}

.mdi-trophy-broken::before {
  content: "\\FD80";
}

.mdi-trophy-outline::before {
  content: "\\F53A";
}

.mdi-trophy-variant::before {
  content: "\\F53B";
}

.mdi-trophy-variant-outline::before {
  content: "\\F53C";
}

.mdi-truck::before {
  content: "\\F53D";
}

.mdi-truck-check::before {
  content: "\\FCB0";
}

.mdi-truck-check-outline::before {
  content: "\\F02C5";
}

.mdi-truck-delivery::before {
  content: "\\F53E";
}

.mdi-truck-delivery-outline::before {
  content: "\\F02C6";
}

.mdi-truck-fast::before {
  content: "\\F787";
}

.mdi-truck-fast-outline::before {
  content: "\\F02C7";
}

.mdi-truck-outline::before {
  content: "\\F02C8";
}

.mdi-truck-trailer::before {
  content: "\\F726";
}

.mdi-trumpet::before {
  content: "\\F00C1";
}

.mdi-tshirt-crew::before {
  content: "\\FA7A";
}

.mdi-tshirt-crew-outline::before {
  content: "\\F53F";
}

.mdi-tshirt-v::before {
  content: "\\FA7B";
}

.mdi-tshirt-v-outline::before {
  content: "\\F540";
}

.mdi-tumble-dryer::before {
  content: "\\F916";
}

.mdi-tumble-dryer-alert::before {
  content: "\\F01E5";
}

.mdi-tumble-dryer-off::before {
  content: "\\F01E6";
}

.mdi-tumblr::before {
  content: "\\F541";
}

.mdi-tumblr-box::before {
  content: "\\F917";
}

.mdi-tumblr-reblog::before {
  content: "\\F542";
}

.mdi-tune::before {
  content: "\\F62E";
}

.mdi-tune-vertical::before {
  content: "\\F66A";
}

.mdi-turnstile::before {
  content: "\\FCB1";
}

.mdi-turnstile-outline::before {
  content: "\\FCB2";
}

.mdi-turtle::before {
  content: "\\FCB3";
}

.mdi-twitch::before {
  content: "\\F543";
}

.mdi-twitter::before {
  content: "\\F544";
}

.mdi-twitter-box::before {
  content: "\\F545";
}

.mdi-twitter-circle::before {
  content: "\\F546";
}

.mdi-twitter-retweet::before {
  content: "\\F547";
}

.mdi-two-factor-authentication::before {
  content: "\\F9AE";
}

.mdi-typewriter::before {
  content: "\\FF4A";
}

.mdi-uber::before {
  content: "\\F748";
}

.mdi-ubisoft::before {
  content: "\\FBB6";
}

.mdi-ubuntu::before {
  content: "\\F548";
}

.mdi-ufo::before {
  content: "\\F00EF";
}

.mdi-ufo-outline::before {
  content: "\\F00F0";
}

.mdi-ultra-high-definition::before {
  content: "\\F7F8";
}

.mdi-umbraco::before {
  content: "\\F549";
}

.mdi-umbrella::before {
  content: "\\F54A";
}

.mdi-umbrella-closed::before {
  content: "\\F9AF";
}

.mdi-umbrella-outline::before {
  content: "\\F54B";
}

.mdi-undo::before {
  content: "\\F54C";
}

.mdi-undo-variant::before {
  content: "\\F54D";
}

.mdi-unfold-less-horizontal::before {
  content: "\\F54E";
}

.mdi-unfold-less-vertical::before {
  content: "\\F75F";
}

.mdi-unfold-more-horizontal::before {
  content: "\\F54F";
}

.mdi-unfold-more-vertical::before {
  content: "\\F760";
}

.mdi-ungroup::before {
  content: "\\F550";
}

.mdi-unicode::before {
  content: "\\FEED";
}

.mdi-unity::before {
  content: "\\F6AE";
}

.mdi-unreal::before {
  content: "\\F9B0";
}

.mdi-untappd::before {
  content: "\\F551";
}

.mdi-update::before {
  content: "\\F6AF";
}

.mdi-upload::before {
  content: "\\F552";
}

.mdi-upload-multiple::before {
  content: "\\F83C";
}

.mdi-upload-network::before {
  content: "\\F6F5";
}

.mdi-upload-network-outline::before {
  content: "\\FCB4";
}

.mdi-upload-off::before {
  content: "\\F00F1";
}

.mdi-upload-off-outline::before {
  content: "\\F00F2";
}

.mdi-upload-outline::before {
  content: "\\FE67";
}

.mdi-usb::before {
  content: "\\F553";
}

.mdi-usb-flash-drive::before {
  content: "\\F02C9";
}

.mdi-usb-flash-drive-outline::before {
  content: "\\F02CA";
}

.mdi-usb-port::before {
  content: "\\F021B";
}

.mdi-valve::before {
  content: "\\F0088";
}

.mdi-valve-closed::before {
  content: "\\F0089";
}

.mdi-valve-open::before {
  content: "\\F008A";
}

.mdi-van-passenger::before {
  content: "\\F7F9";
}

.mdi-van-utility::before {
  content: "\\F7FA";
}

.mdi-vanish::before {
  content: "\\F7FB";
}

.mdi-vanity-light::before {
  content: "\\F020C";
}

.mdi-variable::before {
  content: "\\FAE6";
}

.mdi-variable-box::before {
  content: "\\F013C";
}

.mdi-vector-arrange-above::before {
  content: "\\F554";
}

.mdi-vector-arrange-below::before {
  content: "\\F555";
}

.mdi-vector-bezier::before {
  content: "\\FAE7";
}

.mdi-vector-circle::before {
  content: "\\F556";
}

.mdi-vector-circle-variant::before {
  content: "\\F557";
}

.mdi-vector-combine::before {
  content: "\\F558";
}

.mdi-vector-curve::before {
  content: "\\F559";
}

.mdi-vector-difference::before {
  content: "\\F55A";
}

.mdi-vector-difference-ab::before {
  content: "\\F55B";
}

.mdi-vector-difference-ba::before {
  content: "\\F55C";
}

.mdi-vector-ellipse::before {
  content: "\\F892";
}

.mdi-vector-intersection::before {
  content: "\\F55D";
}

.mdi-vector-line::before {
  content: "\\F55E";
}

.mdi-vector-link::before {
  content: "\\F0009";
}

.mdi-vector-point::before {
  content: "\\F55F";
}

.mdi-vector-polygon::before {
  content: "\\F560";
}

.mdi-vector-polyline::before {
  content: "\\F561";
}

.mdi-vector-polyline-edit::before {
  content: "\\F0250";
}

.mdi-vector-polyline-minus::before {
  content: "\\F0251";
}

.mdi-vector-polyline-plus::before {
  content: "\\F0252";
}

.mdi-vector-polyline-remove::before {
  content: "\\F0253";
}

.mdi-vector-radius::before {
  content: "\\F749";
}

.mdi-vector-rectangle::before {
  content: "\\F5C6";
}

.mdi-vector-selection::before {
  content: "\\F562";
}

.mdi-vector-square::before {
  content: "\\F001";
}

.mdi-vector-triangle::before {
  content: "\\F563";
}

.mdi-vector-union::before {
  content: "\\F564";
}

.mdi-venmo::before {
  content: "\\F578";
}

.mdi-vhs::before {
  content: "\\FA1A";
}

.mdi-vibrate::before {
  content: "\\F566";
}

.mdi-vibrate-off::before {
  content: "\\FCB5";
}

.mdi-video::before {
  content: "\\F567";
}

.mdi-video-3d::before {
  content: "\\F7FC";
}

.mdi-video-3d-variant::before {
  content: "\\FEEE";
}

.mdi-video-4k-box::before {
  content: "\\F83D";
}

.mdi-video-account::before {
  content: "\\F918";
}

.mdi-video-check::before {
  content: "\\F008B";
}

.mdi-video-check-outline::before {
  content: "\\F008C";
}

.mdi-video-image::before {
  content: "\\F919";
}

.mdi-video-input-antenna::before {
  content: "\\F83E";
}

.mdi-video-input-component::before {
  content: "\\F83F";
}

.mdi-video-input-hdmi::before {
  content: "\\F840";
}

.mdi-video-input-scart::before {
  content: "\\FFA9";
}

.mdi-video-input-svideo::before {
  content: "\\F841";
}

.mdi-video-minus::before {
  content: "\\F9B1";
}

.mdi-video-off::before {
  content: "\\F568";
}

.mdi-video-off-outline::before {
  content: "\\FBB7";
}

.mdi-video-outline::before {
  content: "\\FBB8";
}

.mdi-video-plus::before {
  content: "\\F9B2";
}

.mdi-video-stabilization::before {
  content: "\\F91A";
}

.mdi-video-switch::before {
  content: "\\F569";
}

.mdi-video-vintage::before {
  content: "\\FA1B";
}

.mdi-video-wireless::before {
  content: "\\FEEF";
}

.mdi-video-wireless-outline::before {
  content: "\\FEF0";
}

.mdi-view-agenda::before {
  content: "\\F56A";
}

.mdi-view-agenda-outline::before {
  content: "\\F0203";
}

.mdi-view-array::before {
  content: "\\F56B";
}

.mdi-view-carousel::before {
  content: "\\F56C";
}

.mdi-view-column::before {
  content: "\\F56D";
}

.mdi-view-comfy::before {
  content: "\\FE4D";
}

.mdi-view-compact::before {
  content: "\\FE4E";
}

.mdi-view-compact-outline::before {
  content: "\\FE4F";
}

.mdi-view-dashboard::before {
  content: "\\F56E";
}

.mdi-view-dashboard-outline::before {
  content: "\\FA1C";
}

.mdi-view-dashboard-variant::before {
  content: "\\F842";
}

.mdi-view-day::before {
  content: "\\F56F";
}

.mdi-view-grid::before {
  content: "\\F570";
}

.mdi-view-grid-outline::before {
  content: "\\F0204";
}

.mdi-view-grid-plus::before {
  content: "\\FFAA";
}

.mdi-view-grid-plus-outline::before {
  content: "\\F0205";
}

.mdi-view-headline::before {
  content: "\\F571";
}

.mdi-view-list::before {
  content: "\\F572";
}

.mdi-view-module::before {
  content: "\\F573";
}

.mdi-view-parallel::before {
  content: "\\F727";
}

.mdi-view-quilt::before {
  content: "\\F574";
}

.mdi-view-sequential::before {
  content: "\\F728";
}

.mdi-view-split-horizontal::before {
  content: "\\FBA7";
}

.mdi-view-split-vertical::before {
  content: "\\FBA8";
}

.mdi-view-stream::before {
  content: "\\F575";
}

.mdi-view-week::before {
  content: "\\F576";
}

.mdi-vimeo::before {
  content: "\\F577";
}

.mdi-violin::before {
  content: "\\F60F";
}

.mdi-virtual-reality::before {
  content: "\\F893";
}

.mdi-visual-studio::before {
  content: "\\F610";
}

.mdi-visual-studio-code::before {
  content: "\\FA1D";
}

.mdi-vk::before {
  content: "\\F579";
}

.mdi-vk-box::before {
  content: "\\F57A";
}

.mdi-vk-circle::before {
  content: "\\F57B";
}

.mdi-vlc::before {
  content: "\\F57C";
}

.mdi-voice::before {
  content: "\\F5CB";
}

.mdi-voice-off::before {
  content: "\\FEF1";
}

.mdi-voicemail::before {
  content: "\\F57D";
}

.mdi-volleyball::before {
  content: "\\F9B3";
}

.mdi-volume-high::before {
  content: "\\F57E";
}

.mdi-volume-low::before {
  content: "\\F57F";
}

.mdi-volume-medium::before {
  content: "\\F580";
}

.mdi-volume-minus::before {
  content: "\\F75D";
}

.mdi-volume-mute::before {
  content: "\\F75E";
}

.mdi-volume-off::before {
  content: "\\F581";
}

.mdi-volume-plus::before {
  content: "\\F75C";
}

.mdi-volume-source::before {
  content: "\\F014B";
}

.mdi-volume-variant-off::before {
  content: "\\FE68";
}

.mdi-volume-vibrate::before {
  content: "\\F014C";
}

.mdi-vote::before {
  content: "\\FA1E";
}

.mdi-vote-outline::before {
  content: "\\FA1F";
}

.mdi-vpn::before {
  content: "\\F582";
}

.mdi-vuejs::before {
  content: "\\F843";
}

.mdi-vuetify::before {
  content: "\\FE50";
}

.mdi-walk::before {
  content: "\\F583";
}

.mdi-wall::before {
  content: "\\F7FD";
}

.mdi-wall-sconce::before {
  content: "\\F91B";
}

.mdi-wall-sconce-flat::before {
  content: "\\F91C";
}

.mdi-wall-sconce-variant::before {
  content: "\\F91D";
}

.mdi-wallet::before {
  content: "\\F584";
}

.mdi-wallet-giftcard::before {
  content: "\\F585";
}

.mdi-wallet-membership::before {
  content: "\\F586";
}

.mdi-wallet-outline::before {
  content: "\\FBB9";
}

.mdi-wallet-plus::before {
  content: "\\FFAB";
}

.mdi-wallet-plus-outline::before {
  content: "\\FFAC";
}

.mdi-wallet-travel::before {
  content: "\\F587";
}

.mdi-wallpaper::before {
  content: "\\FE69";
}

.mdi-wan::before {
  content: "\\F588";
}

.mdi-wardrobe::before {
  content: "\\FFAD";
}

.mdi-wardrobe-outline::before {
  content: "\\FFAE";
}

.mdi-warehouse::before {
  content: "\\FFBB";
}

.mdi-washing-machine::before {
  content: "\\F729";
}

.mdi-washing-machine-alert::before {
  content: "\\F01E7";
}

.mdi-washing-machine-off::before {
  content: "\\F01E8";
}

.mdi-watch::before {
  content: "\\F589";
}

.mdi-watch-export::before {
  content: "\\F58A";
}

.mdi-watch-export-variant::before {
  content: "\\F894";
}

.mdi-watch-import::before {
  content: "\\F58B";
}

.mdi-watch-import-variant::before {
  content: "\\F895";
}

.mdi-watch-variant::before {
  content: "\\F896";
}

.mdi-watch-vibrate::before {
  content: "\\F6B0";
}

.mdi-watch-vibrate-off::before {
  content: "\\FCB6";
}

.mdi-water::before {
  content: "\\F58C";
}

.mdi-water-boiler::before {
  content: "\\FFAF";
}

.mdi-water-boiler-alert::before {
  content: "\\F01DE";
}

.mdi-water-boiler-off::before {
  content: "\\F01DF";
}

.mdi-water-off::before {
  content: "\\F58D";
}

.mdi-water-outline::before {
  content: "\\FE6A";
}

.mdi-water-percent::before {
  content: "\\F58E";
}

.mdi-water-polo::before {
  content: "\\F02CB";
}

.mdi-water-pump::before {
  content: "\\F58F";
}

.mdi-water-pump-off::before {
  content: "\\FFB0";
}

.mdi-water-well::before {
  content: "\\F008D";
}

.mdi-water-well-outline::before {
  content: "\\F008E";
}

.mdi-watermark::before {
  content: "\\F612";
}

.mdi-wave::before {
  content: "\\FF4B";
}

.mdi-waves::before {
  content: "\\F78C";
}

.mdi-waze::before {
  content: "\\FBBA";
}

.mdi-weather-cloudy::before {
  content: "\\F590";
}

.mdi-weather-cloudy-alert::before {
  content: "\\FF4C";
}

.mdi-weather-cloudy-arrow-right::before {
  content: "\\FE51";
}

.mdi-weather-fog::before {
  content: "\\F591";
}

.mdi-weather-hail::before {
  content: "\\F592";
}

.mdi-weather-hazy::before {
  content: "\\FF4D";
}

.mdi-weather-hurricane::before {
  content: "\\F897";
}

.mdi-weather-lightning::before {
  content: "\\F593";
}

.mdi-weather-lightning-rainy::before {
  content: "\\F67D";
}

.mdi-weather-night::before {
  content: "\\F594";
}

.mdi-weather-night-partly-cloudy::before {
  content: "\\FF4E";
}

.mdi-weather-partly-cloudy::before {
  content: "\\F595";
}

.mdi-weather-partly-lightning::before {
  content: "\\FF4F";
}

.mdi-weather-partly-rainy::before {
  content: "\\FF50";
}

.mdi-weather-partly-snowy::before {
  content: "\\FF51";
}

.mdi-weather-partly-snowy-rainy::before {
  content: "\\FF52";
}

.mdi-weather-pouring::before {
  content: "\\F596";
}

.mdi-weather-rainy::before {
  content: "\\F597";
}

.mdi-weather-snowy::before {
  content: "\\F598";
}

.mdi-weather-snowy-heavy::before {
  content: "\\FF53";
}

.mdi-weather-snowy-rainy::before {
  content: "\\F67E";
}

.mdi-weather-sunny::before {
  content: "\\F599";
}

.mdi-weather-sunny-alert::before {
  content: "\\FF54";
}

.mdi-weather-sunset::before {
  content: "\\F59A";
}

.mdi-weather-sunset-down::before {
  content: "\\F59B";
}

.mdi-weather-sunset-up::before {
  content: "\\F59C";
}

.mdi-weather-tornado::before {
  content: "\\FF55";
}

.mdi-weather-windy::before {
  content: "\\F59D";
}

.mdi-weather-windy-variant::before {
  content: "\\F59E";
}

.mdi-web::before {
  content: "\\F59F";
}

.mdi-web-box::before {
  content: "\\FFB1";
}

.mdi-web-clock::before {
  content: "\\F0275";
}

.mdi-webcam::before {
  content: "\\F5A0";
}

.mdi-webhook::before {
  content: "\\F62F";
}

.mdi-webpack::before {
  content: "\\F72A";
}

.mdi-webrtc::before {
  content: "\\F0273";
}

.mdi-wechat::before {
  content: "\\F611";
}

.mdi-weight::before {
  content: "\\F5A1";
}

.mdi-weight-gram::before {
  content: "\\FD1B";
}

.mdi-weight-kilogram::before {
  content: "\\F5A2";
}

.mdi-weight-lifter::before {
  content: "\\F0188";
}

.mdi-weight-pound::before {
  content: "\\F9B4";
}

.mdi-whatsapp::before {
  content: "\\F5A3";
}

.mdi-wheelchair-accessibility::before {
  content: "\\F5A4";
}

.mdi-whistle::before {
  content: "\\F9B5";
}

.mdi-whistle-outline::before {
  content: "\\F02E7";
}

.mdi-white-balance-auto::before {
  content: "\\F5A5";
}

.mdi-white-balance-incandescent::before {
  content: "\\F5A6";
}

.mdi-white-balance-iridescent::before {
  content: "\\F5A7";
}

.mdi-white-balance-sunny::before {
  content: "\\F5A8";
}

.mdi-widgets::before {
  content: "\\F72B";
}

.mdi-wifi::before {
  content: "\\F5A9";
}

.mdi-wifi-off::before {
  content: "\\F5AA";
}

.mdi-wifi-star::before {
  content: "\\FE6B";
}

.mdi-wifi-strength-1::before {
  content: "\\F91E";
}

.mdi-wifi-strength-1-alert::before {
  content: "\\F91F";
}

.mdi-wifi-strength-1-lock::before {
  content: "\\F920";
}

.mdi-wifi-strength-2::before {
  content: "\\F921";
}

.mdi-wifi-strength-2-alert::before {
  content: "\\F922";
}

.mdi-wifi-strength-2-lock::before {
  content: "\\F923";
}

.mdi-wifi-strength-3::before {
  content: "\\F924";
}

.mdi-wifi-strength-3-alert::before {
  content: "\\F925";
}

.mdi-wifi-strength-3-lock::before {
  content: "\\F926";
}

.mdi-wifi-strength-4::before {
  content: "\\F927";
}

.mdi-wifi-strength-4-alert::before {
  content: "\\F928";
}

.mdi-wifi-strength-4-lock::before {
  content: "\\F929";
}

.mdi-wifi-strength-alert-outline::before {
  content: "\\F92A";
}

.mdi-wifi-strength-lock-outline::before {
  content: "\\F92B";
}

.mdi-wifi-strength-off::before {
  content: "\\F92C";
}

.mdi-wifi-strength-off-outline::before {
  content: "\\F92D";
}

.mdi-wifi-strength-outline::before {
  content: "\\F92E";
}

.mdi-wii::before {
  content: "\\F5AB";
}

.mdi-wiiu::before {
  content: "\\F72C";
}

.mdi-wikipedia::before {
  content: "\\F5AC";
}

.mdi-wind-turbine::before {
  content: "\\FD81";
}

.mdi-window-close::before {
  content: "\\F5AD";
}

.mdi-window-closed::before {
  content: "\\F5AE";
}

.mdi-window-closed-variant::before {
  content: "\\F0206";
}

.mdi-window-maximize::before {
  content: "\\F5AF";
}

.mdi-window-minimize::before {
  content: "\\F5B0";
}

.mdi-window-open::before {
  content: "\\F5B1";
}

.mdi-window-open-variant::before {
  content: "\\F0207";
}

.mdi-window-restore::before {
  content: "\\F5B2";
}

.mdi-window-shutter::before {
  content: "\\F0147";
}

.mdi-window-shutter-alert::before {
  content: "\\F0148";
}

.mdi-window-shutter-open::before {
  content: "\\F0149";
}

.mdi-windows::before {
  content: "\\F5B3";
}

.mdi-windows-classic::before {
  content: "\\FA20";
}

.mdi-wiper::before {
  content: "\\FAE8";
}

.mdi-wiper-wash::before {
  content: "\\FD82";
}

.mdi-wordpress::before {
  content: "\\F5B4";
}

.mdi-worker::before {
  content: "\\F5B5";
}

.mdi-wrap::before {
  content: "\\F5B6";
}

.mdi-wrap-disabled::before {
  content: "\\FBBB";
}

.mdi-wrench::before {
  content: "\\F5B7";
}

.mdi-wrench-outline::before {
  content: "\\FBBC";
}

.mdi-wunderlist::before {
  content: "\\F5B8";
}

.mdi-xamarin::before {
  content: "\\F844";
}

.mdi-xamarin-outline::before {
  content: "\\F845";
}

.mdi-xaml::before {
  content: "\\F673";
}

.mdi-xbox::before {
  content: "\\F5B9";
}

.mdi-xbox-controller::before {
  content: "\\F5BA";
}

.mdi-xbox-controller-battery-alert::before {
  content: "\\F74A";
}

.mdi-xbox-controller-battery-charging::before {
  content: "\\FA21";
}

.mdi-xbox-controller-battery-empty::before {
  content: "\\F74B";
}

.mdi-xbox-controller-battery-full::before {
  content: "\\F74C";
}

.mdi-xbox-controller-battery-low::before {
  content: "\\F74D";
}

.mdi-xbox-controller-battery-medium::before {
  content: "\\F74E";
}

.mdi-xbox-controller-battery-unknown::before {
  content: "\\F74F";
}

.mdi-xbox-controller-menu::before {
  content: "\\FE52";
}

.mdi-xbox-controller-off::before {
  content: "\\F5BB";
}

.mdi-xbox-controller-view::before {
  content: "\\FE53";
}

.mdi-xda::before {
  content: "\\F5BC";
}

.mdi-xing::before {
  content: "\\F5BD";
}

.mdi-xing-box::before {
  content: "\\F5BE";
}

.mdi-xing-circle::before {
  content: "\\F5BF";
}

.mdi-xml::before {
  content: "\\F5C0";
}

.mdi-xmpp::before {
  content: "\\F7FE";
}

.mdi-yahoo::before {
  content: "\\FB2A";
}

.mdi-yammer::before {
  content: "\\F788";
}

.mdi-yeast::before {
  content: "\\F5C1";
}

.mdi-yelp::before {
  content: "\\F5C2";
}

.mdi-yin-yang::before {
  content: "\\F67F";
}

.mdi-yoga::before {
  content: "\\F01A7";
}

.mdi-youtube::before {
  content: "\\F5C3";
}

.mdi-youtube-creator-studio::before {
  content: "\\F846";
}

.mdi-youtube-gaming::before {
  content: "\\F847";
}

.mdi-youtube-subscription::before {
  content: "\\FD1C";
}

.mdi-youtube-tv::before {
  content: "\\F448";
}

.mdi-z-wave::before {
  content: "\\FAE9";
}

.mdi-zend::before {
  content: "\\FAEA";
}

.mdi-zigbee::before {
  content: "\\FD1D";
}

.mdi-zip-box::before {
  content: "\\F5C4";
}

.mdi-zip-box-outline::before {
  content: "\\F001B";
}

.mdi-zip-disk::before {
  content: "\\FA22";
}

.mdi-zodiac-aquarius::before {
  content: "\\FA7C";
}

.mdi-zodiac-aries::before {
  content: "\\FA7D";
}

.mdi-zodiac-cancer::before {
  content: "\\FA7E";
}

.mdi-zodiac-capricorn::before {
  content: "\\FA7F";
}

.mdi-zodiac-gemini::before {
  content: "\\FA80";
}

.mdi-zodiac-leo::before {
  content: "\\FA81";
}

.mdi-zodiac-libra::before {
  content: "\\FA82";
}

.mdi-zodiac-pisces::before {
  content: "\\FA83";
}

.mdi-zodiac-sagittarius::before {
  content: "\\FA84";
}

.mdi-zodiac-scorpio::before {
  content: "\\FA85";
}

.mdi-zodiac-taurus::before {
  content: "\\FA86";
}

.mdi-zodiac-virgo::before {
  content: "\\FA87";
}

.mdi-blank::before {
  content: "\\F68C";
  visibility: hidden;
}

.mdi-18px.mdi-set, .mdi-18px.mdi:before {
  font-size: 18px;
}

.mdi-24px.mdi-set, .mdi-24px.mdi:before {
  font-size: 24px;
}

.mdi-36px.mdi-set, .mdi-36px.mdi:before {
  font-size: 36px;
}

.mdi-48px.mdi-set, .mdi-48px.mdi:before {
  font-size: 48px;
}

.mdi-dark:before {
  color: rgba(0, 0, 0, 0.54);
}

.mdi-dark.mdi-inactive:before {
  color: rgba(0, 0, 0, 0.26);
}

.mdi-light:before {
  color: white;
}

.mdi-light.mdi-inactive:before {
  color: rgba(255, 255, 255, 0.3);
}

.mdi-rotate-45 {
  /*
        // Not included in production
        &.mdi-flip-h:before {
            -webkit-transform: scaleX(-1) rotate(45deg);
            transform: scaleX(-1) rotate(45deg);
            filter: FlipH;
            -ms-filter: "FlipH";
        }
        &.mdi-flip-v:before {
            -webkit-transform: scaleY(-1) rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: scaleY(-1) rotate(45deg);
            filter: FlipV;
            -ms-filter: "FlipV";
        }
        */
}

.mdi-rotate-45:before {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.mdi-rotate-90 {
  /*
        // Not included in production
        &.mdi-flip-h:before {
            -webkit-transform: scaleX(-1) rotate(90deg);
            transform: scaleX(-1) rotate(90deg);
            filter: FlipH;
            -ms-filter: "FlipH";
        }
        &.mdi-flip-v:before {
            -webkit-transform: scaleY(-1) rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: scaleY(-1) rotate(90deg);
            filter: FlipV;
            -ms-filter: "FlipV";
        }
        */
}

.mdi-rotate-90:before {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.mdi-rotate-135 {
  /*
        // Not included in production
        &.mdi-flip-h:before {
            -webkit-transform: scaleX(-1) rotate(135deg);
            transform: scaleX(-1) rotate(135deg);
            filter: FlipH;
            -ms-filter: "FlipH";
        }
        &.mdi-flip-v:before {
            -webkit-transform: scaleY(-1) rotate(135deg);
            -ms-transform: rotate(135deg);
            transform: scaleY(-1) rotate(135deg);
            filter: FlipV;
            -ms-filter: "FlipV";
        }
        */
}

.mdi-rotate-135:before {
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
}

.mdi-rotate-180 {
  /*
        // Not included in production
        &.mdi-flip-h:before {
            -webkit-transform: scaleX(-1) rotate(180deg);
            transform: scaleX(-1) rotate(180deg);
            filter: FlipH;
            -ms-filter: "FlipH";
        }
        &.mdi-flip-v:before {
            -webkit-transform: scaleY(-1) rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: scaleY(-1) rotate(180deg);
            filter: FlipV;
            -ms-filter: "FlipV";
        }
        */
}

.mdi-rotate-180:before {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.mdi-rotate-225 {
  /*
        // Not included in production
        &.mdi-flip-h:before {
            -webkit-transform: scaleX(-1) rotate(225deg);
            transform: scaleX(-1) rotate(225deg);
            filter: FlipH;
            -ms-filter: "FlipH";
        }
        &.mdi-flip-v:before {
            -webkit-transform: scaleY(-1) rotate(225deg);
            -ms-transform: rotate(225deg);
            transform: scaleY(-1) rotate(225deg);
            filter: FlipV;
            -ms-filter: "FlipV";
        }
        */
}

.mdi-rotate-225:before {
  -webkit-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg);
}

.mdi-rotate-270 {
  /*
        // Not included in production
        &.mdi-flip-h:before {
            -webkit-transform: scaleX(-1) rotate(270deg);
            transform: scaleX(-1) rotate(270deg);
            filter: FlipH;
            -ms-filter: "FlipH";
        }
        &.mdi-flip-v:before {
            -webkit-transform: scaleY(-1) rotate(270deg);
            -ms-transform: rotate(270deg);
            transform: scaleY(-1) rotate(270deg);
            filter: FlipV;
            -ms-filter: "FlipV";
        }
        */
}

.mdi-rotate-270:before {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}

.mdi-rotate-315 {
  /*
        // Not included in production
        &.mdi-flip-h:before {
            -webkit-transform: scaleX(-1) rotate(315deg);
            transform: scaleX(-1) rotate(315deg);
            filter: FlipH;
            -ms-filter: "FlipH";
        }
        &.mdi-flip-v:before {
            -webkit-transform: scaleY(-1) rotate(315deg);
            -ms-transform: rotate(315deg);
            transform: scaleY(-1) rotate(315deg);
            filter: FlipV;
            -ms-filter: "FlipV";
        }
        */
}

.mdi-rotate-315:before {
  -webkit-transform: rotate(315deg);
  -ms-transform: rotate(315deg);
  transform: rotate(315deg);
}

.mdi-flip-h:before {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}

.mdi-flip-v:before {
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  filter: FlipV;
  -ms-filter: "FlipV";
}

.mdi-spin:before {
  -webkit-animation: mdi-spin 2s infinite linear;
  animation: mdi-spin 2s infinite linear;
}

@-webkit-keyframes mdi-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

@keyframes mdi-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

/*# sourceMappingURL=materialdesignicons.css.map */

`

export default mdi