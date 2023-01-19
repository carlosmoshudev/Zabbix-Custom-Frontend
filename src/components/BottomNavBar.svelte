<script>

</script>

<svelte:head>
    <meta name="description" content="bottom-bar" />
</svelte:head>

<section>
    <ul id="nav-buttons">
        <li>
            <a href="/">
                <i class="fas fa-home"></i>Home
            </a>
        </li>
        <li>
            <a href="/alerts">
                <i class="fas fa-exclamation-triangle"></i>Alerts
            </a>
        </li>
        <li>
            <a href="/devices">
                <i class="fas fa-server"></i>Devices
            </a>
        </li>
        <li>
            <a href="/support">
                <i class="fas fa-question-circle"></i>Support
            </a>
        </li>
        
    </ul>
</section>

<style>
    /* Import fa icons */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');
    section {
        background-color: #1e1e1e;
        color: #fff;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        position: fixed;
        left: -4vw;
        bottom: 0;
        width: 104%;
        height: 5vh;
    }
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        list-style: none;
    }
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-top: 1px solid #ccc8;
        border-right: 1px solid #ccc8;
        border-left: 1px solid #ccc8;
        opacity: 0.8;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
    }
    i {
        margin: 0 1vw;
    }

</style>