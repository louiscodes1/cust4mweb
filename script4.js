<script>
    document.addEventListener('DOMContentLoaded', function() {
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        });
    });
</script>
