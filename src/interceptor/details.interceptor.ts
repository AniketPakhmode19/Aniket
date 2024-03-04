import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDetailView } from 'src/view/entities/view.entity';

@Injectable()
export class DetailsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return data.map((userData: UserDetailView) => {
          let isActiveString: string = '';
          if (userData.isactive === 1) {
            isActiveString = 'Yes';
          } else if (userData.isactive === 0) {
            isActiveString = 'No';
          }
          const res = {
            ...userData,
            isactive: isActiveString
          };
          return res;
        });
      })
    );
  }
}
