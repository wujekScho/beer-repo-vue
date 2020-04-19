<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Style</th>
                <th>Gravity</th>
                <th>Volume</th>
                <th>Yeast</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="brewing.id" v-for="brewing in recipes">
                <td>{{brewing.name}}</td>
                <td>{{brewing.style}}</td>
                <td>{{brewing.gravity}}</td>
                <td>{{brewing.volume}}</td>
                <td>{{brewing.yeast.name}}</td>
                <td>
                    <button v-on:click="$emit('delete-recipe', brewing.id)">
                        x
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "RecipesTable",
        props: {
            recipes: []
        },
    }
</script>