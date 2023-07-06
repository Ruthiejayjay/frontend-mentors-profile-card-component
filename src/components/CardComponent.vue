<script setup>
import StatsItem from './StatsItem.vue';
</script>
<template>
    <div class="w-full min-h-[667px] h-full bg-dark-cyan flex flex-col">
        <div
            class="bg-[url('../assets/images/bg-pattern-top.svg')] bg-no-repeat bg-cover h-[250px] -rotate-[-135deg] -ml-80 md:h-[550px] md:-ml-[1080px]">
        </div>
        <div class=" -mt-36 w-[326px] h-[374px] bg-white mx-6 rounded-2xl z-30 flex flex-col md:-mt-96 md:mx-96 md:w-[350px]">
            <div class="w-[326px] h-[140px] rounded-t-2xl md:w-[350px]">
                <img src="../assets/images/bg-pattern-card.svg" alt="bg-pattern-card" class=" rounded-t-2xl">
            </div>
            <div class="grid place-items-center">
                <div class="w-24 h-24 border-[5px] border-white rounded-full -mt-14">
                    <img src="../assets/images/image-victor.jpg" alt="image-victor" class=" rounded-full">
                </div>
                <div class=" text-center mt-4">
                    <h3 class=" text-lg text-very-dark-desaturated-blue font-bold"> Victor Crest
                        <span class=" font-normal text-dark-grayish-blue">26</span>
                    </h3>
                    <h6 class=" text-sm text-dark-grayish-blue">London</h6>
                </div>
                <div class="mt-7 w-[326px]">
                    <hr class=" text-gray">
                    <div class=" mt-6 flex flex-row justify-around">
                        <StatsItem>
                            <template #stats>80K</template>
                            <template #title> Followers</template>
                        </StatsItem>
                        <StatsItem>
                            <template #stats>803K</template>
                            <template #title> Likes</template>
                        </StatsItem>
                        <StatsItem>
                            <template #stats>1.4K</template>
                            <template #title> Photos</template>
                        </StatsItem>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[url('../assets/images/bg-pattern-bottom.svg')] bg-no-repeat bg-cover h-[250px] -rotate-[90deg] -mr-60 md:h-[550px] md:-mr-0 md:-rotate-[20deg]"></div>
    </div>
</template>