import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { ModalComponent } from '../../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  private confirmationSubject = new Subject<boolean>();

  constructor(private modalService: NgbModal) {}
  openConfirmationModal(): Promise<boolean> {
    const modalRef = this.modalService.open(ModalComponent);

    return modalRef.result.then(
      () => true,
      () => false
    ) as Promise<boolean>;
  }
}
