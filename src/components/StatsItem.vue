<template>
    <div class="flex flex-col text-center">
       <h3 class=" text-lg font-bold text-very-dark-desaturated-blue">
        <slot name="stats"></slot>
       </h3> 
       <h6 class="text-[10px] text-dark-grayish-blue tracking-wider">
        <slot name="title"></slot>
       </h6>
    </div>
</template>