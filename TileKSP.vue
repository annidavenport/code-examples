<template>
  <div class="TileKSP">
    <a href="javascript:void(0)" target="_blank" class="pic">
      <div class="pic pic-3d">
        <picture>
          <source :srcset="imageXS" media="(max-width: 767px)">
          <source :srcset="image" media="(min-width: 768px)">
          <img :src="image" alt="MDN">
        </picture>
        <span class="pic-caption come-right">
          {{props.hoverText}}
        </span>
      </div>

      <div class="overlay">
        <div class="angle"></div>
        <div class="text-inner">
          <p class="tile-title">{{props.title}}</p>
          <span class="flip-icon"><TileFlipIcon/></span>
        </div>
      </div>

    </a>
  </div>
</template>
<script>
import TileFlipIcon from '../assets/icons/tile-flip-icon.svg';
export default {
  name: 'TileKSP',
  props: [
    'props'
  ],
  components: {
    TileFlipIcon
  },
  computed: {
    image () {
      return require('../assets/ksp-images/' + this.props.image);
    },
    imageXS () {
      return require('../assets/ksp-images/xs/' + this.props.image);
    }
  },
  data () {
    return {
    };
  }
};
</script>
<style scoped lang="scss">
@import "../scss/colours.scss";
@import "../scss/type.scss";
@import "../scss/responsive.scss";

.TileKSP {
  position: relative;
  overflow: hidden;
  a {
    text-decoration: none;
    color: white;

    .overlay {
      position: absolute;
      width: 100%;
      bottom: 0;
      .angle {
        background-color: transparentize($vuBlue, 0.1);
        z-index: 1;
        height: auto;
        @include responsive(sm) {
          height: 500px;
          transform: skew(0, -3deg);
          transform-origin: 50% 50%;
          transition: 0.5s;
          margin-bottom: -475px;
        }
      }
    }

    .text-inner {
      position: relative;
      z-index: 10;
      background-color: transparentize($vuBlue, 0.1);
      width: 100%;
      height: auto;
      padding: 10px $gutter;
      display: table;
      @include responsive(sm) {
        background-color: transparent;
      }
      .flip-icon {
        display: table-cell;
        width: 15px;
        svg {  transition: 0.5s; }
        @include responsive(sm) { display: none; }
      }
      .tile-title {
        display: table-cell;
        vertical-align: middle;
        max-width: 100%;
        border: 1px solid transparent;
        font-family: $futuraCondensed;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.2em;
        margin: 0;
        @include responsive(sm) {
          display: block;
          float: right;
          width: 100%;
          text-align: right;
        }
        @include responsive(md) { width: 80%; font-size: 1.5em; }
        @include responsive(lg) { width: 60%; }
      }
    }

    &:hover, &:active, &:focus {
      .angle {
        @include responsive(sm) {
          transform: translateY(200px);
           transition: 0.5s;
        }
      }
      svg { -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        filter: FlipH;
        -ms-filter: "FlipH";
        transition: 0.5s;
      }
    }
  }

  /* ------------------------------------------------------------------------------------ */
  /* ------------------------------------------------------------------------------------ */
  @mixin prefix($prop, $val){
    @each $prefix in -webkit-, -moz-, -o-, -ms-, ''{
        #{$prefix}#{$prop}: $val;
    }
  }
  // Opacity
  @mixin transparency($opacity){
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=($opacity * 100))";
    filter: alpha(opacity=($opacity * 100));
    -moz-opacity: $opacity;
    -khtml-opacity: $opacity;
    opacity: $opacity;
  }

  .pic {
    position: relative;
    overflow: hidden;
    display: inline-block;
    margin-bottom: -10px;
    width: 100%;
    @include responsive(sm) { height: auto; }
    @include prefix(animation, anima 2s);
    @include prefix(backface-visibility, hidden);
  }
  .pic-3d {
    @include prefix(perspective, 500);
    @include prefix(transform-style, preserve-3d);
  }

  .pic-caption {
    cursor: default;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    padding: $gutter;
    font-size: 1em;
    @include transparency(0);
    @include responsive(sm) { font-size: 0.8em; }
    @include responsive(md) { font-size: 1em; }
    @include responsive(lg) { font-size: 1.2em; }
  }

  .pic-image {
    @include prefix(transform, scale(1.1));
  }
  .pic:hover .pic-image, .pic:active .pic-image, .pic:focus .pic-image {
    @include prefix(transform, scale(1));
  }

  /*All classes with similar attribute*/
  a, a:hover,
  .pic .pic-image,
  .pic-caption,
  .pic:hover, .pic:active, .pic:focus, .pic-caption,
  .pic:hover img{
     @include prefix(transition, all 0.5s ease);
  }

  /*--- EFFECTS AND TRANSITIONS ---*/
  .pic:hover .come-right, .pic:active .come-right, .pic:focus .come-right {
    @include transparency(1);
    @include prefix(user-select, none);
    @include prefix(touch-callout, none);
    @include prefix(tap-highlight-color, rgba(0,0,0,0));
  }
  /*Open Come Out*/
  .come-right{
    @include prefix(transform, rotateY(-90deg) rotateX(-90deg));
    left:0;
    top:0;
  }
  .pic:hover .come-right, .pic:active .come-right, .pic:focus .come-right {
    @include prefix(transform, rotateY(0) rotateX(0));
  }
}
</style>
