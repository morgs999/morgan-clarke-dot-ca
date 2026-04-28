import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Music } from '../models/music';
import { musicArray } from '../music/musicArray';

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    private musicSubject = new BehaviorSubject<Music[]>(musicArray);

    music$ = this.musicSubject.asObservable();

    constructor() { }

    getMusic(): Observable<Music[]> {
        return this.music$;
    }

    filterByGenre(genre: string): Observable<Music[]> {
        const filtered = musicArray.filter(album => album.genres.includes(genre)
        );
        return new BehaviorSubject(filtered).asObservable();
    }

    filterByProductionRole(role: string) : Observable<Music[]> {
        const filtered = musicArray.filter(album => album.production.includes(role));
        return new BehaviorSubject(filtered).asObservable();
    }

    getAllGenres(): string[] {
        const genreSet = new Set<string>();
        musicArray.forEach(album => {
            album.genres.forEach(genre => genreSet.add(genre));
        });
        return Array.from(genreSet).sort();
    }

    getAllProductionRoles(): string[] {
        const roleSet = new Set<string>();
        musicArray.forEach(album => {
            album.production.forEach(role => roleSet.add(role))
        });
        return Array.from(roleSet).sort();
    }

    getFilteredMusic(genre: string | null, role: string | null): Music[] {
        let filtered = [...musicArray];

        if (genre) {
            filtered = filtered.filter(album => album.genres.includes(genre));
        }

        if (role) {
            filtered = filtered.filter(album => album.production.includes(role));
        }

        return filtered;
    }
}