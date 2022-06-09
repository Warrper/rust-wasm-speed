import fs from 'fs';
import path from 'path';

export default function(dir: string): string[] {
	return fs.readdirSync(dir).filter(file => fs.statSync(path.join(dir, file)).isDirectory());
}