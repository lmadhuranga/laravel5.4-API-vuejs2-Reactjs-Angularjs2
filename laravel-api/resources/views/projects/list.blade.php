<ul>
    @foreach($projects as $project)
        <li>{{ $project['name'] }}</li>
    @endforeach
</ul>